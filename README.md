# spring_demo_ppt

[![HOME](https://img.shields.io/badge/HOME-dream__on__sakura__rain-brightgreen)](https://github.com/licunzhi/spring_demo_ppt)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/licunzhi/spring_demo_ppt/pulls)
![GitHub stars](https://img.shields.io/github/stars/licunzhi/spring_demo_ppt.svg?style=social)
![GitHub forks](https://img.shields.io/github/forks/licunzhi/spring_demo_ppt.svg?style=social)

# spring url请求说明：
- 请求类型: `POST`
- 请求参数位置: `request.getBody()`
- 接口方法实例:
```java
@RequestMapping("/renderReportParams")
@ResponseBody
public String renderReportParams(HttpServletRequest request, HttpServletResponse response,
                                 @RequestBody List<PptModel> pptModelList) {
     /*自定义服务层或者是其他业务代码*/
    return "操作提示结果";
}
```
- js请求常用打包方法
```javascript
/*打包参数定义*/
var chartIds = ['chart_info'];
var textIds = ['header_info', 'title_info'];

/*文本参数打包*/
function packageText() {
    var result = [];
    $.each(textIds, function (index) {
        result.push({
            dataId: textIds[index],
            dataType: 1,
            // dataContent: $(`#${textIds[index]}`).text().replace(/[\r\n]/g, "").replace(/\ +/g, "").trim()
            dataContent: $(`#${textIds[index]}`).text().replace(/[\r\n]/g, "")
        });
    });
    return result;
}

/*图片参数打包*/
function packageCharts() {
    var result = [];
    $.each(chartIds, function (index) {
        var pptModel = {
            dataId: chartIds[index],
            dataType: 5,
            dataContent: '',
            defaultContent: '',
        };
        var mychart = echarts.init(document.getElementById(chartIds[index]));
        if (mychart._chartsViews.length == 0) {
            pptModel.dataContent = "";
        } else {
            pptModel.dataContent = mychart.getDataURL().split('base64,')[1];
        }
        result.push(pptModel);
    });
    return result;
}

/*牵涉到dom结构转图片时*/
var syncCanvasToImg = {
    /**
     * 将指定class的动态图截图并替换为静态图
     * @param selector 选择器
     */
    html2canvas: function (selector, pptModelList) {
        var canvasArr = [];
        $.each(selector, function () {
            var thisSelector = $(this);
            //返回的是一个promise对象
            var canvasResult = html2canvas(thisSelector, {
                backgroundColor: 'rgba(255,255,255,0)',
            }, {
                // async:false,//同步执行
                onrendered: function (canvas) {
                    var url = canvas.toDataURL();
                    console.log(url);
                }
            });
            canvasArr.push(canvasResult);

        });
        Promise.all(canvasArr).then(function (response) {
            console.log("所有异步请求执行结束之后调用");
            $.each(response, function (index, item) {
                pptModelList.push({
                    dataId: domIds[index],
                    dataType: 5,
                    dataContent: item.toDataURL().split('base64,')[1],
                    defaultContent: '',
                })
            });
            /*执行其他参数的打包，或者是调用已经打包结束的参数集合*/
            postImgData(pptModelList);
        })
    }
};
```
- axios 请求
```javascript
// 设置对象json提交格式
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers = {
    'Content-Type': 'application/json'
  }
  return config
}, error => {
  return Promise.reject(error)
})


// post请求
post (url, param) {
return new Promise((resolve, reject) => {
  axios.post(
    url,
    param
  ).then(res => {
    resolve(res)
  }, err => {
    reject(err)
  })
})
}
```

