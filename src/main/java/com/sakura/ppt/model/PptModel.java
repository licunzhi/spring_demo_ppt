package com.sakura.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.Accessors;

/**
 * <p>PPT工具数据转储对象</p>
 *
 * <p>{@link #dataType}代表含义</p>
 * <ul>
 *     <li>1 : text or number data</li>
 *     <li><s>2 : text or number data</s></li>
 *     <li>3 : picture dataContent is picture path 图片路径</li>
 *     <li>4 : picture dataContent is picture file 文件类型</li>
 *     <li>5 : picture dataContent is base64 code base64 base64位数据</li>
 *     <li>6 : table 表格数据</li>
 * </ul>
 * @author lcz
 * @date 2019/06/18 09:43
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Accessors(chain = true)
public class PptModel<T> {
    private String dataId;
    private int dataType;
    private T dataContent;
    private T defaultContent;
}
