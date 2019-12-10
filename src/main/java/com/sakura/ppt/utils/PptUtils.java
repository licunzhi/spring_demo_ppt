package com.sakura.ppt.utils;

import com.sakura.ppt.model.PptModel;
import org.apache.commons.codec.binary.StringUtils;
import org.apache.poi.util.IOUtils;
import org.apache.poi.xslf.usermodel.XMLSlideShow;
import org.apache.poi.xslf.usermodel.XSLFGroupShape;
import org.apache.poi.xslf.usermodel.XSLFPictureData;
import org.apache.poi.xslf.usermodel.XSLFPictureShape;
import org.apache.poi.xslf.usermodel.XSLFShape;
import org.apache.poi.xslf.usermodel.XSLFSlide;
import org.apache.poi.xslf.usermodel.XSLFTable;
import org.apache.poi.xslf.usermodel.XSLFTableCell;
import org.apache.poi.xslf.usermodel.XSLFTableRow;
import org.apache.poi.xslf.usermodel.XSLFTextParagraph;
import org.apache.poi.xslf.usermodel.XSLFTextRun;
import org.apache.poi.xslf.usermodel.XSLFTextShape;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import sun.misc.BASE64Decoder;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * @ClassName PptUtils
 * @Description create ppt base on ppt model
 * @Author lcz
 * @Date 2019/06/04 09:07
 * @notice java version support 1.8 or later
 */
public class PptUtils {
    private static final Logger LOGGER = LoggerFactory.getLogger(PptUtils.class);

    /**
     * 数据类型含义可以参照PptModel注解内容
     */
    public static final int TEXT_DATA = 1;
    public static final int NUMBER_DATA = 2;
    public static final int PICTURE_PATH_DATA = 3;
    public static final int PICTRUE_FILE_DATA = 4;
    public static final int PICTRUE_BASE64_DATA = 5;
    public static final int TABLE_DATA = 6;

    private static final String BIG_SPL = "\\|";
    private static final String SAM_SPL = "\\$";

    /**
     * ppt创建封装方法入口
     *
     * @param file         模板文件
     * @param pptModelList 参数对象集合
     * @param removeLists  移除页码
     * @return 操作缓冲对象
     * @throws Exception
     */
    public static XMLSlideShow createPpt(File file, List<PptModel> pptModelList, List<Integer> removeLists) throws Exception {
        /*validate file exist*/
        if (file == null) {
            throw new FileNotFoundException("文件不存在");
        }
        /*
         * list转map
         * toMap()参数顺序：keyMapper valueMapper 自定义function
         * 最终结果：dataId: PptModel
         * */
        Map<String, PptModel> dataMap = pptModelList.stream().collect(Collectors.toMap(PptModel::getDataId,
                value -> value, (k1, l2) -> k1));

        try (FileInputStream fileInputStream = new FileInputStream(file)) {
            XMLSlideShow xmlSlideShow = new XMLSlideShow(fileInputStream);
            XSLFSlide[] xmlSlideShowSlides = xmlSlideShow.getSlides();
            for (XSLFSlide xslfSlide : xmlSlideShowSlides) {
                for (XSLFShape shape : xslfSlide.getShapes()) {
                    renderShape(xmlSlideShow, xslfSlide, shape, dataMap);
                }
            }

            if (removeLists != null) {
                removeLists.sort(Integer::compareTo);
                for (int i = 0; i < removeLists.size(); i++) {
                    xmlSlideShow.removeSlide(removeLists.get(i) - i);
                }
            }
            return xmlSlideShow;
        }

    }

    /**
     * @param dataMap template data information
     * @desc inner method
     */
    private static void renderShape(XMLSlideShow xmlSlideShow, XSLFSlide xslfShapes, XSLFShape shape, Map<String,
            PptModel> dataMap) throws Exception {
        if (shape instanceof XSLFGroupShape) {
            XSLFShape[] shapes = ((XSLFGroupShape) shape).getShapes();
            for (XSLFShape xslfShape : shapes) {
                renderShape(xmlSlideShow, xslfShapes, xslfShape, dataMap);
            }
        } else if (shape instanceof XSLFTextShape) {
            XSLFTextShape txShape = (XSLFTextShape) shape;
            renderShapeContent(xmlSlideShow, xslfShapes, txShape, dataMap);
        } else if (shape instanceof XSLFTable) {
            XSLFTable tableShape = (XSLFTable) shape;
            renderTableContent(xmlSlideShow, xslfShapes, tableShape, dataMap);
        } else {
            System.out.println(shape.getClass());
        }
    }

    /**
     * @param dataMap template data information
     * @desc inner methods
     */
    private static void renderShapeContent(XMLSlideShow xmlSlideShow, XSLFSlide xslfShape, XSLFTextShape shape,
                                           Map<String, PptModel> dataMap) throws Exception {
        Set<String> dataKeys = getDataKeys(shape);
        for (String key : dataKeys) {
            key = key.replaceAll("#", "");
            PptModel pptModel = dataMap.get(key);
            if (pptModel == null) {
                continue;
            }
            int dataType = pptModel.getDataType();
            switch (dataType) {
                case TEXT_DATA:
                    List<XSLFTextParagraph> paragraphList = shape.getTextParagraphs();
                    for (XSLFTextParagraph p : paragraphList) {
                        for (XSLFTextRun textRun : p.getTextRuns()) {
                            String value = (pptModel.getDataContent() == null ? pptModel.getDefaultContent() :
                                    pptModel.getDataContent()).toString();
                            //String text = textRun.getText().replaceAll(key, value).replaceAll("#", "");
                            String text = textRun.getText().replaceAll("#" + key + "#", "△" + value + "△").replaceAll("△", "");
                            textRun.setText(text);
                        }
                    }
                    break;
                case PICTURE_PATH_DATA:
                    String value = (pptModel.getDataContent() == null ? pptModel.getDefaultContent() :
                            pptModel.getDataContent()).toString();
                    if (value == null) {
                        LOGGER.error("文件不存在");
                        break;
                    }

                    File image = new File(pptModel.getDataContent().toString());
                    byte[] pictureData = IOUtils.toByteArray(new FileInputStream(image));
                    int idx = xmlSlideShow.addPicture(pictureData, XSLFPictureData.PICTURE_TYPE_JPEG);
                    XSLFPictureShape pic = xslfShape.createPicture(idx);
                    pic.setAnchor(shape.getAnchor());
                    xslfShape.removeShape(shape);
                    break;
                case PICTRUE_FILE_DATA:
                    File file = (File) (pptModel.getDataContent() == null ? pptModel.getDefaultContent() :
                            pptModel.getDataContent());
                    if (file == null) {
                        LOGGER.error("文件不存在");
                        break;
                    }
                    byte[] pictureFileData = IOUtils.toByteArray(new FileInputStream(file));
                    int idxFile = xmlSlideShow.addPicture(pictureFileData, XSLFPictureData.PICTURE_TYPE_JPEG);
                    XSLFPictureShape picFile = xslfShape.createPicture(idxFile);
                    picFile.setAnchor(shape.getAnchor());
                    xslfShape.removeShape(shape);
                    break;
                case PICTRUE_BASE64_DATA:
                    String base64 = (String) (pptModel.getDataContent() == null ? pptModel.getDefaultContent() :
                            pptModel.getDataContent());
                    if (base64 == null) {
                        LOGGER.error("base64数据值存在问题");
                        break;
                    }
                    byte[] decodeBuffer = new BASE64Decoder().decodeBuffer(base64);
                    int idxBaseFile = xmlSlideShow.addPicture(decodeBuffer, XSLFPictureData.PICTURE_TYPE_JPEG);
                    XSLFPictureShape picBaseFile = xslfShape.createPicture(idxBaseFile);
                    picBaseFile.setAnchor(shape.getAnchor());
                    xslfShape.removeShape(shape);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * template table data
     */
    private static void renderTableContent(XMLSlideShow xmlSlideShow, XSLFSlide xslfShape, XSLFTable shape,
                                           Map<String, PptModel> dataMap) {
        Set<String> dataKeys = getDataKeys(shape);
        for (String key : dataKeys) {
            key = key.replaceAll("#", "");
            PptModel pptModel = dataMap.get(key);
            if (pptModel == null) {
                continue;
            }
            if (pptModel.getDataType() != TABLE_DATA) {
                return;
            }

            String tableDataContent = (String) pptModel.getDataContent();
            String[] outData = tableDataContent.split(BIG_SPL);
            int dataLocation = 0;
            int dataBeginIndex = 0;

            for (int k = 0; k < shape.getRows().size(); k++) {
                XSLFTableRow row = shape.getRows().get(k);
                String dataKey = row.getCells().get(0).getText().replaceAll("#", "");
                if (!StringUtils.equals(dataKey, key)) {
                    continue;
                } else {
                    dataBeginIndex = dataBeginIndex == 0 ? k : dataBeginIndex;
                }
                if (dataLocation >= outData.length) {
                    break;
                }
                String[] innerData = outData[dataLocation].split(SAM_SPL);
                List<XSLFTableCell> cells = row.getCells();
                for (int j = 0; j < cells.size(); j++) {
                    cells.get(j).setText(innerData[j]);
                }
                dataLocation++;
            }
        }
    }


    private static Set<String> getDataKeys(XSLFTextShape shape) {
        String regex = "#[^#]*#";
        Set<String> dataMapKeys = new LinkedHashSet<>();
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(shape.getText());
        while (matcher.find()) {
            System.out.println(matcher.group());
            dataMapKeys.add(matcher.group());
        }
        return dataMapKeys;
    }

    private static Set<String> getDataKeys(XSLFTable shape) {
        String regex = "#[^#]*#";
        Set<String> dataMapKeys = new LinkedHashSet<>();
        Pattern pattern = Pattern.compile(regex);
        StringBuilder cellContent = new StringBuilder("");
        shape.getRows().forEach(row -> row.getCells().forEach(cell -> {
            cellContent.append(cell.getText()).append(" ");
        }));
        Matcher matcher = pattern.matcher(cellContent.toString());
        while (matcher.find()) {
            System.out.println(matcher.group());
            dataMapKeys.add(matcher.group());
        }
        return dataMapKeys;
    }

}
