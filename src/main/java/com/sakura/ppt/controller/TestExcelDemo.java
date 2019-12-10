package com.sakura.ppt.controller;

import com.sakura.ppt.utils.ExcelUtils;
import lombok.Cleanup;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @ClassName TestExcelDemo
 * @Description 测试excel的展示效果
 * @Author lcz
 * @Date 2019/12/10 11:01
 */
public class TestExcelDemo {
    public static void main(String[] args) throws IOException {

        HSSFWorkbook hssfWorkbook = new HSSFWorkbook();
        ExcelUtils.createDataSheet(hssfWorkbook, "DEMO");

        int location = 0;
        ExcelUtils.fillExcelTitle(hssfWorkbook, "DEMO", "这是标题", location);
        location++;

        List<String> ths = Arrays.asList("ONE", "TWO", "THREE");
        ExcelUtils.fillExcelTh(hssfWorkbook, "DEMO", ths, location);
        location++;

        List<String> one = Arrays.asList("apple", "red", "ball");
        List<String> two = Arrays.asList("pear", "yellow", "Pear shape");
        List<String> three = Arrays.asList("芒果", "red", "ball");
        List<List<String>> tds = new ArrayList<>();
        tds.add(one);
        tds.add(two);
        tds.add(three);
        ExcelUtils.fillExcelTd(hssfWorkbook, "DEMO", tds, location);

        File file = new File("excelDemo.xls");
        @Cleanup
        FileOutputStream fileOutputStream = new FileOutputStream(file);
        hssfWorkbook.write(fileOutputStream);


    }
}
