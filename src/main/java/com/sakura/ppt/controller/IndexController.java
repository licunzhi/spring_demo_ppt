package com.sakura.ppt.controller;

import com.sakura.ppt.model.PptModel;
import com.sakura.ppt.utils.PptUtils;
import lombok.Cleanup;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.xslf.usermodel.XMLSlideShow;
import org.springframework.stereotype.Controller;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileOutputStream;
import java.net.URL;
import java.net.URLDecoder;
import java.util.Arrays;
import java.util.List;

/**
 * @ClassName IndexController
 * @Description 视图数据跳转
 * @Author lcz
 * @Date 2019/12/07 11:08
 */
@Controller
@Slf4j
public class IndexController {

    @RequestMapping("/index")
    public String index() {
        return "index";
    }

    @RequestMapping("/indexPre")
    public String indexPre() {
        return "indexPre";
    }

    /**
     * 建议写入配置文件中
     */
    private static final String PPT_MODEL_PATH = "/pptModel/%s.pptx";

    private static final String PPT_MODEL_NAME = "template";

    @RequestMapping("/renderReportParams")
    @ResponseBody
    public String renderReportParams(HttpServletRequest request, HttpServletResponse response,
                                     @RequestBody List<PptModel> pptModelList) {
        System.out.println(pptModelList);
        /*----------------------------server params build start-------------------------------------*/
        // 传入文件路径
        PptModel pathModel = new PptModel<String>().setDataId("path_img").setDataType(3).setDataContent("E:/var" +
                "/images/okjs.png");
        pptModelList.add(pathModel);

        // 传入的直接是文件
        File file = new File("E:/var/images/okjs.png");
        PptModel fileModel = new PptModel<File>().setDataId("file_img").setDataType(4).setDataContent(file);
        pptModelList.add(fileModel);

        String dataStr = "MMMMMMM$NNNNNN$BBBBBB$ZZZZZZ|PPPPPP$OOOOOO$UUUUUU$YYYYYY|MMMMMMM$NNNNNN$BBBBBB$ZZZZZZ|OOOOOO$UUUUUU$YYYYYY$KLKLKLK";
        PptModel tableData = new PptModel<String>().setDataId("table_begin_data").setDataType(6).setDataContent(dataStr);
        pptModelList.add(tableData);

        PptModel max = new PptModel<String>().setDataId("MAXLENGTHDEMO").setDataType(1).setDataContent("MMMMM");
        PptModel maxCo = new PptModel<String>().setDataId("MAXLENGTHDEMODEMO").setDataType(1).setDataContent("TTTT");
        pptModelList.add(max);
        pptModelList.add(maxCo);
        /*----------------------------server params build end-------------------------------------*/

        // 需要删除的页面参数
        //List<Integer> removeList = Arrays.asList(0, 2);

        try {

            ClassLoader defaultClassLoader = ClassUtils.getDefaultClassLoader();
            assert defaultClassLoader != null;
            URL resource = defaultClassLoader.getResource("");
            assert resource != null;
            String path = resource.getPath();
            path = URLDecoder.decode(path, "utf-8");
            String pptFilePath = path + String.format(PPT_MODEL_PATH, PPT_MODEL_NAME);
            File pptFile = new File(pptFilePath);
            if (!pptFile.exists()) {
                log.error(">>>createPPT downloadReport ppt model file not found error>>>");
                return "错误消息提示";
            }

            XMLSlideShow xmlSlideShow = PptUtils.createPpt(pptFile, pptModelList, null);
            @Cleanup
            FileOutputStream fileOutputStream = new FileOutputStream(new File("result.pptx"));
            xmlSlideShow.write(fileOutputStream);

        } catch (Exception e) {
            e.printStackTrace();
            log.error(">>>createPPT downloadReport decode url path error>>> {} ");
            return "错误的渲染结果提示";
        }

        return "ok message";
    }
}
