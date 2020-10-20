var API = window.API = {
	//webPath			: "http://192.168.1.105:9999/",
	webPathWai: "http://120.234.223.173:8081/",
	webPath: "http://192.168.10.50:8081/",
	version: "test", //demo:静态，prod:正式，test:测试
	urls: {
		login: "anon/login!login.action",
		resrce: "roleresrceperm!queryResrceTree.action"
	},
	modules: {

	},
	data: {
		resrce: []
	},
	components: {
		article: {}
	},
	funcs: {
		getUrlParams: function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) {
				return (r[2]);
			}
			return null;
		}
	},
	CONSTANTS: {
		bsCode: "bsCode", //登录用户编码
		bsName: "bsName", //登录用户名
		appWork: "appWork", //登录用户所属工厂
		appDept: "appDept", //登录用户所属部门
		appPlannerGroups: "appPlannerGroups" //登录用户所属计划员组 多个以“,”隔开
	}
};


/** 
 * 时间对象的格式化 
 */
Date.prototype.format = function(format) {

	/* format="yyyy-MM-dd hh:mm:ss"; */

	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	}

	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
			.substr(4 - RegExp.$1.length));
	}

	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
				("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
};
//判断浏览器是手机还是电脑
function API_GetbrType() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	// if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
	if (!(bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
		return 0; //PC
	} else {
		return 1; //手机
	}
}

//判断登录会话是否成功，成功返回1，失败返回0
function API_getLogin() {
	//判断会话
	var r = 0;
	var params = {
		"UID": localStorage.UID
	};
	var url = API.webPath + "anon/web/kmLogin!doLogin_check.action";
	//当session丢失但localStorage没有丢失时，模拟登录一次
	//var params={"kmUser.bsCode": usr, "kmUser.bsPassword":password};
	$.ajax({
		//cache: false,
		async: false,
		dataType: 'json',
		type: 'post',
		url: url,
		data: params,
		success: function(msg) {
			if (msg.status == "SUCCESS") {
				//登录成功  
				r = 1; //验证成功
			} else {
				r = 0; //账号密码验证失败
			}
		},
		error: function(msg) {
			r = -1; //"最痛苦的事情莫过于没有网络！"
		}
	});

	return r;
}

//登录，成功返回1，失败返回0
function API_Login(user, pwd) {
	//判断会话
	var r = 0;
	var usr = user;
	var password = pwd;
	var url = API.webPath + "anon/web/kmLogin!doLogin.action";


	//如果存在本地会话则校验登录信息
	if (usr) {
		//当session丢失但localStorage没有丢失时，模拟登录一次
		var params = {
			"kmUser.bsCode": usr,
			"kmUser.bsPassword": password
		};
		$.ajax({
			//cache: false,
			async: false,
			dataType: 'json',
			type: 'post',
			url: url,
			data: params,
			success: function(msg) {
				if (msg.status == "SUCCESS") {
					localStorage.setItem("bsCode", msg.data.bsCode);
					localStorage.setItem("bsName", msg.data.bsName);
					localStorage.setItem("bsPassword", pwd); //电话
					sessionStorage.setItem("bsCode", msg.data.bsCode); //存一个session会话
					if (msg.data.appDept) {
						localStorage.setItem("appWork", msg.data.appWork.bsCode); // 工厂代码
						localStorage.setItem("appWorkPk", msg.data.pkWork); //工厂描述
						localStorage.setItem("appDept", msg.data.appDept.bsCode); //部门代码
						localStorage.setItem("appDeptPk", msg.data.pkDept); //部门描述
					}

					r = 1; //与0和1区别  这个要单独重新推送消息
				} else {

					//alert(msg.jsonMessage);
					r = 0;
				}
			}

		});

	} else {
		r = -1;
	}
	return r;
}


//淡入淡出效果插件  add by YJY 2015-8-19 
function lighttips(id, tips, time) {
	if (tips) {
		$("#" + id).find("p").html(tips);
	}
	$("#" + id).fadeIn();
	$("#" + id).fadeOut(time);
}

//动态加载JS，css
function loadjscssfile(filename, filetype) {

	if (filetype == "js") {
		var fileref = document.createElement('script');
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
	} else if (filetype == "css") {

		var fileref = document.createElement('link');
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}

}

//取URL参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return unescape(r[2]);
	return null; //返回参数值
}

//localStorage存储数据的方法
function api_localStorageSave(objname, obj) {
	var str = JSON.stringify(obj);
	//存入 
	localStorage.setItem(objname, str)
	sessionStorage.objname = str;
}

function api_localStorageGet(objname) {
	//读取 
	str = localStorage.getItem(objname);
	//重新转换为对象 
	obj = JSON.parse(str);
	return obj;
}
//获取IOS站点路径http://ip:端口/PMAPP/web/
function api_getWebPath() {
	var curWwwPath = "http://" + window.location.host + "/PMAPP/web/";
	return curWwwPath;
}
//获取IOS站点路径http://ip:端口/PMAPP/web/
function api_getiWebPath() {
	var curWwwPath = "http://" + window.location.host + "/PMAPP/iweb/";
	return curWwwPath;
}
//20190808-fyx-获取url的参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
//20190808-fyx-封装mui.ajax()
;
! function(window) {
	window.aj = {};

	aj.get = function(url, data, success) {
		ajax("get", API.webPath + url, data, success);
	};

	aj.post = function(url, data, success) {

		var urlA = api_localStorageGet("webPath") + url;

		ajax("post", urlA, data, success);
	};

	var _mask = mui.createMask(); //遮罩层 
	function ajax(type, url, data, success) {
		/* $.ajax({
		    'type': type,
		    'url': url,
		    'data': data,
		    'dataType': "json",
		    'cache': false,
		    'async': true,
		    'success': success,
		    'contentType': 'application/json;charset=utf-8',
		    'beforeSend': function () {
		        index = layer.msg('加载中', {
		            icon: 16,
		            shade: 0.01
		        });
		    },
		    'complete': function () {
		        layer.close(index);
		    }
		}); */
		mui.ajax(url, {
			data: data,
			dataType: 'json',
			type: 'POST',
			timeout: 20000,
			headers: {},
			success: success,
			error: function(xhr, type, errorThrown) {
				mui.alert('服务器连接超时，请稍后再试');
			},
			beforeSend: function() {
				plus.nativeUI.showWaiting("处理中，请等待...");
				_mask.show(); //显示遮罩层
				//transWaiting()
			},
			complete: function() {
				plus.nativeUI.closeWaiting();
				_mask.close(); //关闭遮罩层
			}
		})
	}
}(window);

function clicked(url, f1, f2, urlId) {
	mui.openWindow({
		id: f1,
		url: url,
		extras: {
			urlId: urlId
			//自定义扩展参数，可以用来处理页面间传值 
		},
		show: { //控制打开页面的类型
			autoShow: true,
			//页面loaded事件发生后自动显示，默认为true 
			aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；  页面出现的方式 左右上下
			duration: '100' //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒； 
		},
		waiting: { // 控制 弹出转圈框的信息
			autoShow: true, //自动显示等待框，默认为true 
			title: '加载中' //等待对话框上显示的提示内容 
		}
	});
};
//20191129-fyx-封装ajax调用webservice的方法

var _mask = mui.createMask(); //遮罩层 
function jQueryWeb(url, data, complete) {
	_mask.show();
	$.ajax({
		type: "POST",
		url: api_localStorageGet("webPath") + "/CY_Webservice_01.asmx/" + url,

		data: data,
		dataType: "xml",
		complete: complete,
		beforeSend: function(request) {
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.setRequestHeader("SOAPAction", "http://ecifWebservice/service");
		},
		success: function(result) {
			//console.log(JSON.stringify(result))

			_mask.close();
		},
		error: function(request, errorInfo) {
			_mask.close();
			alert("errorInfo = " + errorInfo);
			alert("进入error---\n" + "状态码：" + request.status + "\n状态:" + request.readyState +
				"\n错误信息:" + request.statusText +
				"\n返回响应信息：" + request.responseText);
		}
	});

}

function GetColumnObject(sql, complete) {
	jQueryWeb("GetColumnObject", {
		"flag_Test_PRDT": api_localStorageGet("PRDT"),
		"sql": sql
	}, complete);
}

function CheckSQL(sql, complete) {
	jQueryWeb("CheckSQL", {
		"flag_Test_PRDT": api_localStorageGet("PRDT"),
		"sql": sql
	}, complete);
}
//20191129-fyx-封装打开新页面的方法
function OpenWindow(id, url, extras) {
	mui.openWindow({
		id: id,
		url: url,
		styles: {
			top: '0px', //新页面顶部位置 
			bottom: '0px', //新页面底部位置 
			//width: newpage - width, //新页面宽度，默认为100% 
			//height: newpage - height, //新页面高度，默认为100% ...... 
		},
		extras: extras,
		show: { //控制打开页面的类型
			autoShow: true,
			//页面loaded事件发生后自动显示，默认为true 
			aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；  页面出现的方式 左右上下
			duration: '100' //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒； 
		},
		waiting: { // 控制 弹出转圈框的信息
			autoShow: true, //自动显示等待框，默认为true 
			title: '加载中', //等待对话框上显示的提示内容 
			options: {
				width: '300px', //等待框背景区域宽度，默认根据内容自动计算合适宽度 
				height: '100px', //等待框背景区域高度，默认根据内容自动计算合适高度 ...... 
			}
		}
	});
}
//2020-7-16 找标签ID
function byId(id) {
	return document.getElementById(id);
};
//2020-7-20 页脚字符串
function slogan() {
	var slogan =
		"提&nbsp&nbsp&nbsp&nbsp&nbsp高&nbsp&nbsp&nbsp&nbsp&nbsp生&nbsp&nbsp&nbsp&nbsp&nbsp产&nbsp&nbsp&nbsp&nbsp&nbsp效&nbsp&nbsp&nbsp&nbsp&nbsp率&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp打&nbsp&nbsp&nbsp&nbsp&nbsp造&nbsp&nbsp&nbsp&nbsp&nbsp卓&nbsp&nbsp&nbsp&nbsp&nbsp越&nbsp&nbsp&nbsp&nbsp&nbsp品&nbsp&nbsp&nbsp&nbsp&nbsp质";
	return slogan;
}

function setUsrCode() {
	var UsrCode = api_localStorageGet("code");
	return "" + api_localStorageGet("name") + "(" + UsrCode + ")";
}
//处理返回的标签数据并打印
function sortData(data_list) {
	var print_list = [];
	var data = {};
	var barcode_data = "";
	for (var i = 0; i < data_list.length; i++) {
		if (data_list[i].ITEM == "标签类型") {
			data["label"] = data_list[i].VALUE; //标签
		} else if (data_list[i].ITEM == "数量") {
			data["amount"] = data_list[i].VALUE; //数量
		} else if (data_list[i].ITEM == "完工类型") {
			data["type_of_com"] = data_list[i].VALUE; //完工类型
		} else if (data_list[i].ITEM == "箱类型") {
			data["type_of_box"] = data_list[i].VALUE; //箱类型
		} else if (data_list[i].ITEM == "品名") {
			data["name"] = data_list[i].VALUE; //品名
		} else if (data_list[i].ITEM == "品号规格") {
			data["format"] = data_list[i].VALUE; //规格
		} else if (data_list[i].ITEM == "品号") {
			data["num"] = data_list[i].VALUE; //品号
		} else if (data_list[i].ITEM == "工单") {
			data["order"] = data_list[i].VALUE; //工单
		} else if (data_list[i].ITEM == "工序名称") {
			data["proces"] = data_list[i].VALUE; //工序名
		} else if (data_list[i].ITEM == "线体名称") {
			data["line"] = data_list[i].VALUE; //线体
		} else if (data_list[i].ITEM == "班次") {
			data["class_code"] = data_list[i].VALUE; //班次
		} else if (data_list[i].ITEM == "条码") {
			data["barcode"] = data_list[i].VALUE; //二维码
			barcode_data = data_list[i].VALUE;
		}else if(data_list[i].ITEM == "标签时间"){
			data["label_time"] = data_list[i].VALUE; //班次
		}
	}
	print_list.push(data);
	toPrint(print_list);
	return barcode_data;
}
//打印标签
function print_datalist(list) {
	try {
		var titleName = "辰奕智能";
		var label_time= list[0].label_time;
		var label = "标签类型： " + list[0].label
		var amount = "  数量：" + list[0].amount;
		var type_of_com = "   " + list[0].type_of_com; //完工类型
		var type_of_box = "  " + list[0].type_of_box; //箱类型
		var name = "品名：                 " + list[0].name;
		var format = "规格：                 " + list[0].format;
		var num = "品号：     " + list[0].num;
		var order = "工单：     " + list[0].order;
		var proces = "工序：     " + list[0].proces;
		var line = "线体：     " + list[0].line; //线体名
		var clas_code = "       " + list[0].class_code; //班次
		var barcode = list[0].barcode; //条码
		//内容
		//var printCmd = "! 0 203 203 510 1 \n\r"; //建立页面 对于203dpi,8点=1mm;对于305dpi,12点=1mm(有孔纸)
		var printCmd = "! 0 203 203 503 1 \n\r"; //建立页面 对于203dpi,8点=1mm;对于305dpi,12点=1mm
		//printCmd += "POSTFEED 8\n\r"; //打印之后走纸距离指令(有孔纸)
		printCmd += "POSTFEED 1\n\r"; //打印之后走纸距离指令（无孔）
		printCmd += "PAGE-WIDTH 645 \n\r"; //打印型号 超过不显示
		//printCmd+="CENTER \n\r";
		printCmd += "SETMAG 1 1\n\r";
		printCmd += "SETBOLD 2\n\r";
		printCmd += "TEXT 24 1 230 4 " + titleName + " \n\r";
		printCmd += "TEXT 24 1 350 5 " + label_time + " \n\r";
		printCmd += "SETMAG 0 0\n\r";
		printCmd += "SETBOLD 0\n\r";
		//printCmd+="LEFT \n\r";	
		printCmd += "LINE 2 28 2 364 3 \n\r"; //长竖线1
		printCmd += "LINE 125 28 125 364 3 \n\r"; //长竖线2
		printCmd += "LINE 570 28 570 364 3 \n\r"; //长竖线3
		printCmd += "LINE 350 172 350 364 3 \n\r"; //中竖线
		printCmd += "LINE 250 316 250 364 3 \n\r"; //班次左边线
		printCmd += "LINE  222 28 222 76 3 \n\r"; //数量作左边线
		printCmd += "LINE 375 28 375 76 3 \n\r"; //工序完工左边线
		//printCmd += "LINE 110 270 45 270 3 \n\r"; //

		printCmd += "LINE 2 28 570 28 3 \n\r";
		printCmd += "TEXT 24 0 8 46 " + label + amount + type_of_com + type_of_box + " \n\r";
		printCmd += "LINE 2 76 570 76 3 \n\r";
		printCmd += "TEXT 24 0 8 94 " + name + " \n\r"; //text270 指文本旋转270°
		printCmd += "LINE 2 124 570 124 3 \n\r";
		printCmd += "TEXT 24 0 8 142 " + format + " \n\r";
		printCmd += "LINE 2 172 570 172 3 \n\r";
		printCmd += "TEXT 24 0 8 190 " + num + " \n\r";
		printCmd += "LINE 2 220 350 220 3 \n\r"; //短线1
		printCmd += "TEXT 24 0 8 238 " + order + " \n\r";
		printCmd += "LINE 2 268 350 268 3 \n\r"; //短线2
		printCmd += "TEXT 24 0 8 286 " + proces + " \n\r";
		printCmd += "LINE 2 316 350 316 3 \n\r"; //短线3
		printCmd += "TEXT 24 0 8 334 " + line + clas_code + " \n\r";
		printCmd += "LINE 2 364 570 364 3 \n\r";
		printCmd += "TEXT 24 0 368 345 " + barcode + " \n\r";
		//打印二维条码
		printCmd += "BARCODE QR 390 183 M 2 U 6\r\n"; //打印二维条码 超过不显示BARCODE \n\r  
		printCmd += "MA," + barcode + "\r\n";
		printCmd += "ENDQR\n\r";
		// printCmd+="VBARCODE 128 1 0 32 120 700 "+barCode+"\n\r";//打印一维条码  超过不显示         
		//开始打印     
		printCmd += "FORM \n\r"; // 型号：       
		printCmd += "PRINT \n\r";
		return printCmd;
	} catch (err) {
		console.log("printErr:" + err)
		var printCmd = "";
		return printCmd;
	}
}
