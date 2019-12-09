/**
 * Created by cc on 2016/10/29.
 */
var geoCoordMap = {
	//昆明区县经纬度
	'东川': [103.19651,26.089819],
	'禄劝': [102.479,25.565208],
	'寻甸': [103.259155,25.571443],
	'富民': [102.499563,25.228359],
	'嵩明': [103.04464,25.345695],
	'盘龙': [102.762289,25.122646],
	'五华': [102.713304,25.049796],
	'官渡': [102.749811,25.021248],
	'宜良': [103.147151,24.927144],
	'安宁': [102.484459,24.925827],
	'呈贡': [102.807463,24.891984],
	'西山': [102.644973,24.940263],
	'晋宁': [102.600209,24.675798],
	'石林': [103.255347,24.78099],
	
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    
    '沈阳': [123.1238, 42.1216],
    '铁岭市': [123.72949,42.23123],
    '抚顺市': [123.953452,41.888548],
    '阜新市': [121.676408,42.029737],
    '朝阳市': [120.456924,41.581116],
    '葫芦岛市': [120.842248,40.719114],
    '锦州市': [120.842248,40.719114],
    '盘锦市': [122.07864,41.127179],
    '辽阳市': [122.07864,41.127179],
    '本溪市': [123.688483,41.494645],
    '营口市': [122.24215,40.674888],
    
    
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028],
    '玉溪': [102.561978, 24.365576],
    '曲靖': [103.846461, 25.479048],
    '普洱': [100.985681, 22.820407],
    '保山': [99.18758, 25.141523],
    '丽江': [100.24059, 26.87349],
    '临沧': [100.13504, 23.870557],
    '昭通': [103.740038, 27.342947],
    //广东城市的坐标
    '茂名': [110.924874, 21.658302],
    '阳江': [111.981002, 21.861201],
    '湛江': [110.358595, 21.262073],
    '梅州': [116.12228, 24.292203],
    '云浮': [112.052195, 22.920089],
    '潮州': [116.63288, 23.659745],
    '揭阳': [116.374621, 23.547292],
    //省默认的坐标
    '河北': [114.515282, 38.042284],
    '山西': [112.554147, 37.867911],
    '内蒙古': [111.722379, 40.841437],
    '辽宁': [123.433547, 41.806053],
    '吉林': [126.561822, 43.836854],
    '黑龙江': [126.615461, 45.76783],
    '江苏': [118.793648, 32.050918],
    '浙江': [120.175084, 30.275479],
    '安徽': [117.29, 32.0581],
    '福建': [119.315688, 26.064516],
    '江西': [115.871617, 28.678442],
    '山东': [117.035069, 36.667004],
    '河南': [113.677966, 34.74735],
    '湖北': [114.294737, 30.564532],
    '湖南': [112.993431, 28.185567],
    '广西': [108.346711, 22.806247],
    '海南': [110.328721, 20.019148],
    '四川': [104.077657, 30.655796],
    '贵州': [106.6654, 26.637315],
    '云南': [102.717297, 25.040037],
    '西藏': [91.126321, 29.650135],
    '陕西': [108.953738, 34.279762],
    '甘肃': [103.789126, 36.072947],
    '青海': [101.784272, 36.629807],
    '宁夏': [106.242278, 38.480464],
    '新疆': [87.615177, 43.81862],
    '香港': [114.185792, 22.266106],
    '澳门': [113.555727, 22.201929],
    ///国际
    '伦敦': [0.0732, 51.3031],
    '巴黎': [2.3522, 48.8566],
    '华盛顿': [-77.0368, 38.9071],
    '马德里': [-3.8301, 40.4982],
    '里斯本': [-9.1393, 38.7222],
    '首尔': [126.9779, 37.5665],
    '东京': [139.6917, 35.6894],
    '塔那那利佛': [47.5079, -18.8791],
    '渥太华': [-75.6971, 45.4215],
    '墨西哥城': [-99.1332, 19.4326],
    '莫斯科': [37.6173, 55.7558],
    '金沙萨': [15.2662, -4.4419],
    '巴西利亚': [-51.9252, -14.2350],
    '堪培拉': [149.1244, -35.3075],
    //世界国家
    '阿富汗': [67.709953, 33.93911],
    '安哥拉': [17.873887, -11.202692],
    '阿尔巴尼亚': [20.168331, 41.153332],
    '阿联酋': [53.847818, 23.424076],
    '阿根廷': [-63.61667199999999, -38.416097],
    '亚美尼亚': [45.038189, 40.069099],
    '法属南半球和南极领地': [69.348557, -49.280366],
    '澳大利亚': [133.775136, -25.274398],
    '奥地利': [14.550072, 47.516231],
    '阿塞拜疆': [47.576927, 40.143105],
    '布隆迪': [29.918886, -3.373056],
    '比利时': [4.469936, 50.503887],
    '贝宁': [2.315834, 9.30769],
    '布基纳法索': [-1.561593, 12.238333],
    '孟加拉国': [90.356331, 23.684994],
    '保加利亚': [25.48583, 42.733883],
    '巴哈马': [-77.39627999999999, 25.03428],
    '波斯尼亚和黑塞哥维那': [17.679076, 43.915886],
    '白俄罗斯': [27.953389, 53.709807],
    '伯利兹': [-88.49765, 17.189877],
    '百慕大': [-64.7505, 32.3078],
    '玻利维亚': [-63.58865299999999, -16.290154],
    '巴西': [-51.92528, -14.235004],
    '文莱': [114.727669, 4.535277],
    '不丹': [90.433601, 27.514162],
    '博茨瓦纳': [24.684866, -22.328474],
    '中非共和国': [20.939444, 6.611110999999999],
    '加拿大': [-106.346771, 56.130366],
    '瑞士': [8.227511999999999, 46.818188],
    '智利': [-71.542969, -35.675147],
    '中国': [104.195397, 35.86166],
    '象牙海岸': [-5.547079999999999, 7.539988999999999],
    '喀麦隆': [12.354722, 7.369721999999999],
    '刚果民主共和国': [21.758664, -4.038333],
    '刚果共和国': [15.827659, -0.228021],
    '哥伦比亚': [-74.297333, 4.570868],
    '哥斯达黎加': [-83.753428, 9.748916999999999],
    '古巴': [-77.781167, 21.521757],
    '北塞浦路斯': [33.429859, 35.126413],
    '塞浦路斯': [33.429859, 35.126413],
    '捷克共和国': [15.472962, 49.81749199999999],
    '德国': [10.451526, 51.165691],
    '吉布提': [42.590275, 11.825138],
    '丹麦': [9.501785, 56.26392],
    '多明尼加共和国': [-70.162651, 18.735693],
    '阿尔及利亚': [1.659626, 28.033886],
    '厄瓜多尔': [-78.18340599999999, -1.831239],
    '埃及': [30.802498, 26.820553],
    '厄立特里亚': [39.782334, 15.179384],
    '西班牙': [-3.74922, 40.46366700000001],
    '爱沙尼亚': [25.013607, 58.595272],
    '埃塞俄比亚': [40.489673, 9.145000000000001],
    '芬兰': [25.748151, 61.92410999999999],
    '斐': [178.065032, -17.713371],
    '福克兰群岛': [-59.523613, -51.796253],
    '法国': [2.213749, 46.227638],
    '加蓬': [11.609444, -0.803689],
    '英国': [-3.435973, 55.378051],
    '格鲁吉亚': [-82.9000751, 32.1656221],
    '加纳': [-1.023194, 7.946527],
    '几内亚': [-9.696645, 9.945587],
    '冈比亚': [-15.310139, 13.443182],
    '几内亚比绍': [-15.180413, 11.803749],
    '赤道几内亚': [10.267895, 1.650801],
    '希腊': [21.824312, 39.074208],
    '格陵兰': [-42.604303, 71.706936],
    '危地马拉': [-90.23075899999999, 15.783471],
    '法属圭亚那': [-53.125782, 3.933889],
    '圭亚那': [-58.93018, 4.860416],
    '洪都拉斯': [-86.241905, 15.199999],
    '克罗地亚': [15.2, 45.1],
    '海地': [-72.285215, 18.971187],
    '匈牙利': [19.503304, 47.162494],
    '印尼': [113.921327, -0.789275],
    '印度尼西亚': [113.921327, -0.789275],
    '印度': [78.96288, 20.593684],
    '爱尔兰': [-8.24389, 53.41291],
    '伊朗': [53.688046, 32.427908],
    '伊拉克': [43.679291, 33.223191],
    '冰岛': [-19.020835, 64.963051],
    '以色列': [34.851612, 31.046051],
    '意大利': [12.56738, 41.87194],
    '牙买加': [-77.297508, 18.109581],
    '约旦': [36.238414, 30.585164],
    '日本': [138.252924, 36.204824],
    '哈萨克斯坦': [66.923684, 48.019573],
    '肯尼亚': [37.906193, -0.023559],
    '吉尔吉斯斯坦': [74.766098, 41.20438],
    '柬埔寨': [104.990963, 12.565679],
    '韩国': [127.766922, 35.907757],
    '科索沃': [20.902977, 42.6026359],
    '科威特': [47.481766, 29.31166],
    '老挝': [102.495496, 19.85627],
    '黎巴嫩': [35.862285, 33.854721],
    '利比里亚': [-9.429499000000002, 6.428055],
    '利比亚': [17.228331, 26.3351],
    '斯里兰卡': [80.77179699999999, 7.873053999999999],
    '莱索托': [28.233608, -29.609988],
    '立陶宛': [23.881275, 55.169438],
    '卢森堡': [6.129582999999999, 49.815273],
    '拉脱维亚': [24.603189, 56.879635],
    '摩洛哥': [-7.092619999999999, 31.791702],
    '摩尔多瓦': [28.369885, 47.411631],
    '马达加斯加': [46.869107, -18.766947],
    '墨西哥': [-102.552784, 23.634501],
    '马其顿': [21.745275, 41.608635],
    '马里': [-3.996166, 17.570692],
    '缅甸': [95.956223, 21.913965],
    '黑山': [19.37439, 42.708678],
    '蒙古': [103.846656, 46.862496],
    '莫桑比克': [35.529562, -18.665695],
    '毛里塔尼亚': [-10.940835, 21.00789],
    '马拉维': [34.301525, -13.254308],
    '马来西亚': [101.975766, 4.210484],
    '纳米比亚': [18.49041, -22.95764],
    '新喀里多尼亚': [165.618042, -20.904305],
    '尼日尔': [8.081666, 17.607789],
    '尼日利亚': [8.675277, 9.081999],
    '尼加拉瓜': [-85.207229, 12.865416],
    '荷兰': [5.291265999999999, 52.132633],
    '挪威': [8.468945999999999, 60.47202399999999],
    '尼泊尔': [84.12400799999999, 28.394857],
    '新西兰': [174.885971, -40.900557],
    '阿曼': [55.923255, 21.512583],
    '巴基斯坦': [69.34511599999999, 30.375321],
    '巴拿马': [-80.782127, 8.537981],
    '秘鲁': [-75.015152, -9.189967],
    '菲律宾': [121.774017, 12.879721],
    '巴布亚新几内亚': [143.95555, -6.314992999999999],
    '波兰': [19.145136, 51.919438],
    '波多黎各': [-66.590149, 18.220833],
    '北朝鲜': [127.510093, 40.339852],
    '葡萄牙': [-8.224454, 39.39987199999999],
    '巴拉圭': [-58.443832, -23.442503],
    '卡塔尔': [51.183884, 25.354826],
    '罗马尼亚': [24.96676, 45.943161],
    '俄罗斯': [105.318756, 61.52401],
    '卢旺达': [29.873888, -1.940278],
    '西撒哈拉': [-12.885834, 24.215527],
    '沙特阿拉伯': [45.079162, 23.885942],
    '苏丹': [30.217636, 12.862807],
    '南苏丹': [31.3069788, 6.876991899999999],
    '塞内加尔': [-14.452362, 14.497401],
    '所罗门群岛': [160.156194, -9.64571],
    '塞拉利昂': [-11.779889, 8.460555],
    '萨尔瓦多': [-88.89653, 13.794185],
    '索马里兰': [46.8252838, 9.411743399999999],
    '索马里': [46.199616, 5.152149],
    '塞尔维亚共和国': [21.005859, 44.016521],
    '苏里南': [-56.027783, 3.919305],
    '斯洛伐克': [19.699024, 48.669026],
    '斯洛文尼亚': [14.995463, 46.151241],
    '瑞典': [18.643501, 60.12816100000001],
    '斯威士兰': [31.465866, -26.522503],
    '叙利亚': [38.996815, 34.80207499999999],
    '乍得': [18.732207, 15.454166],
    '多哥': [0.824782, 8.619543],
    '泰国': [100.992541, 15.870032],
    '塔吉克斯坦': [71.276093, 38.861034],
    '土库曼斯坦': [59.556278, 38.969719],
    '东帝汶': [125.727539, -8.874217],
    '特里尼达和多巴哥': [-61.222503, 10.691803],
    '突尼斯': [9.537499, 33.886917],
    '土耳其': [35.243322, 38.963745],
    '坦桑尼亚联合共和国': [34.888822, -6.369028],
    '乌干达': [32.290275, 1.373333],
    '乌克兰': [31.16558, 48.379433],
    '乌拉圭': [-55.765835, -32.522779],
    '美国': [-95.712891, 37.09024],
    '乌兹别克斯坦': [64.585262, 41.377491],
    '委内瑞拉': [-66.58973, 6.42375],
    '越南': [108.277199, 14.058324],
    '瓦努阿图': [166.959158, -15.376706],
    '西岸': [35.3027226, 31.9465703],
    '也门': [48.516388, 15.552727],
    '南非': [22.937506, -30.559482],
    '赞比亚': [27.849332, -13.133897],
    '津巴布韦': [29.154857, -19.015438],
    '新加坡': [103.828298, 1.310397],
    '台湾': [121.557543, 25.045711],
    '泽西岛': [25.597655, 34.96842]
};

var county_data = {
    'Afghanistan': '阿富汗',
    'Angola': '安哥拉',
    'Albania': '阿尔巴尼亚',
    'United Arab Emirates': '阿联酋',
    'Argentina': '阿根廷',
    'Armenia': '亚美尼亚',
    'French Southern and Antarctic Lands': '法属南半球和南极领地',
    'Australia': '澳大利亚',
    'Austria': '奥地利',
    'Azerbaijan': '阿塞拜疆',
    'Burundi': '布隆迪',
    'Belgium': '比利时',
    'Benin': '贝宁',
    'Burkina Faso': '布基纳法索',
    'Bangladesh': '孟加拉国',
    'Bulgaria': '保加利亚',
    'The Bahamas': '巴哈马',
    'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
    'Belarus': '白俄罗斯',
    'Belize': '伯利兹',
    'Bermuda': '百慕大',
    'Bolivia': '玻利维亚',
    'Brazil': '巴西',
    'Brunei': '文莱',
    'Bhutan': '不丹',
    'Botswana': '博茨瓦纳',
    'Central African Republic': '中非共和国',
    'Canada': '加拿大',
    'Switzerland': '瑞士',
    'Chile': '智利',
    'China': '中国',
    'Ivory Coast': '象牙海岸',
    'Cameroon': '喀麦隆',
    'Democratic Republic of the Congo': '刚果民主共和国',
    'Republic of the Congo': '刚果共和国',
    'Colombia': '哥伦比亚',
    'Costa Rica': '哥斯达黎加',
    'Cuba': '古巴',
    'Northern Cyprus': '北塞浦路斯',
    'Cyprus': '塞浦路斯',
    'Czech Republic': '捷克共和国',
    'Germany': '德国',
    'Djibouti': '吉布提',
    'Denmark': '丹麦',
    'Dominican Republic': '多明尼加共和国',
    'Algeria': '阿尔及利亚',
    'Ecuador': '厄瓜多尔',
    'Egypt': '埃及',
    'Eritrea': '厄立特里亚',
    'Spain': '西班牙',
    'Estonia': '爱沙尼亚',
    'Ethiopia': '埃塞俄比亚',
    'Finland': '芬兰',
    'Fiji': '斐',
    'Falkland Islands': '福克兰群岛',
    'France': '法国',
    'Gabon': '加蓬',
    'United Kingdom': '英国',
    'Georgia': '格鲁吉亚',
    'Ghana': '加纳',
    'Guinea': '几内亚',
    'Gambia': '冈比亚',
    'Guinea Bissau': '几内亚比绍',
    'Equatorial Guinea': '赤道几内亚',
    'Greece': '希腊',
    'Greenland': '格陵兰',
    'Guatemala': '危地马拉',
    'French Guiana': '法属圭亚那',
    'Guyana': '圭亚那',
    'Honduras': '洪都拉斯',
    'Croatia': '克罗地亚',
    'Haiti': '海地',
    'Hungary': '匈牙利',
    'Indonesia': '印尼',
    'India': '印度',
    'Ireland': '爱尔兰',
    'Iran': '伊朗',
    'Iraq': '伊拉克',
    'Iceland': '冰岛',
    'Israel': '以色列',
    'Italy': '意大利',
    'Jamaica': '牙买加',
    'Jordan': '约旦',
    'Japan': '日本',
    'Kazakhstan': '哈萨克斯坦',
    'Kenya': '肯尼亚',
    'Kyrgyzstan': '吉尔吉斯斯坦',
    'Cambodia': '柬埔寨',
    'South Korea': '韩国',
    'Kosovo': '科索沃',
    'Kuwait': '科威特',
    'Laos': '老挝',
    'Lebanon': '黎巴嫩',
    'Liberia': '利比里亚',
    'Libya': '利比亚',
    'Sri Lanka': '斯里兰卡',
    'Lesotho': '莱索托',
    'Lithuania': '立陶宛',
    'Luxembourg': '卢森堡',
    'Latvia': '拉脱维亚',
    'Morocco': '摩洛哥',
    'Moldova': '摩尔多瓦',
    'Madagascar': '马达加斯加',
    'Mexico': '墨西哥',
    'Macedonia': '马其顿',
    'Mali': '马里',
    'Myanmar': '缅甸',
    'Montenegro': '黑山',
    'Mongolia': '蒙古',
    'Mozambique': '莫桑比克',
    'Mauritania': '毛里塔尼亚',
    'Malawi': '马拉维',
    'Malaysia': '马来西亚',
    'Namibia': '纳米比亚',
    'New Caledonia': '新喀里多尼亚',
    'Niger': '尼日尔',
    'Nigeria': '尼日利亚',
    'Nicaragua': '尼加拉瓜',
    'Netherlands': '荷兰',
    'Norway': '挪威',
    'Nepal': '尼泊尔',
    'New Zealand': '新西兰',
    'Oman': '阿曼',
    'Pakistan': '巴基斯坦',
    'Panama': '巴拿马',
    'Peru': '秘鲁',
    'Philippines': '菲律宾',
    'Papua New Guinea': '巴布亚新几内亚',
    'Poland': '波兰',
    'Puerto Rico': '波多黎各',
    'North Korea': '北朝鲜',
    'Portugal': '葡萄牙',
    'Paraguay': '巴拉圭',
    'Qatar': '卡塔尔',
    'Romania': '罗马尼亚',
    'Russia': '俄罗斯',
    'Rwanda': '卢旺达',
    'Western Sahara': '西撒哈拉',
    'Saudi Arabia': '沙特阿拉伯',
    'Sudan': '苏丹',
    'South Sudan': '南苏丹',
    'Senegal': '塞内加尔',
    'Solomon Islands': '所罗门群岛',
    'Sierra Leone': '塞拉利昂',
    'El Salvador': '萨尔瓦多',
    'Somaliland': '索马里兰',
    'Somalia': '索马里',
    'Republic of Serbia': '塞尔维亚共和国',
    'Suriname': '苏里南',
    'Slovakia': '斯洛伐克',
    'Slovenia': '斯洛文尼亚',
    'Sweden': '瑞典',
    'Swaziland': '斯威士兰',
    'Syria': '叙利亚',
    'Chad': '乍得',
    'Togo': '多哥',
    'Thailand': '泰国',
    'Tajikistan': '塔吉克斯坦',
    'Turkmenistan': '土库曼斯坦',
    'East Timor': '东帝汶',
    'Trinidad and Tobago': '特里尼达和多巴哥',
    'Tunisia': '突尼斯',
    'Turkey': '土耳其',
    'United Republic of Tanzania': '坦桑尼亚联合共和国',
    'Uganda': '乌干达',
    'Ukraine': '乌克兰',
    'Uruguay': '乌拉圭',
    'United States of America': '美国',
    'Uzbekistan': '乌兹别克斯坦',
    'Venezuela': '委内瑞拉',
    'Vietnam': '越南',
    'Vanuatu': '瓦努阿图',
    'West Bank': '西岸',
    'Yemen': '也门',
    'South Africa': '南非',
    'Zambia': '赞比亚',
    'Zimbabwe': '津巴布韦'
};