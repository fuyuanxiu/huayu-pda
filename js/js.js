
$(function () {
	echarts_0()
echarts_1();
 echarts_2();
 echarts_3();
echarts_4();
/*echarts_31();
echarts_32();
echarts_33();
echarts_5();
echarts_6(); */
function echarts_0() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart0'));
        var   option = {
              // backgroundColor: '#1b1b1b',
               series: [
                   {
                       name: '开机率',
                       type: 'gauge',
                       splitNumber: 5,
                       radius: '95%',
					   center: ['20%', '55%'],    // 默认全局居中
					   splitLine: {
					   				show: false,
					   			},
                       axisLine: { 
						   show: false,// 坐标轴线
                           lineStyle: {       // 属性lineStyle控制线条样式
                               color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                               width: 1,
                               shadowColor: '#fff', //默认透明
                               shadowBlur: 2
                           }
                       },
                       axisLabel: {            // 坐标轴小标记
					   show: false,
                           fontWeight: 'bolder',
                           color: '#fff',
                           shadowColor: '#fff', //默认透明
                           shadowBlur: 2
                       },
                       axisTick: {            // 坐标轴小标记
					   show: false,
                           length: 3,        // 属性length控制线长
                           lineStyle: {       // 属性lineStyle控制线条样式
                               color: 'auto',
                               shadowColor: '#fff', //默认透明
                               shadowBlur: 2
                           }
                       },
                       splitLine: {           // 分隔线
                           length: 4,         // 属性length控制线长
                           lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                               width: 3,
                               color: '#fff',
                               shadowColor: '#fff', //默认透明
                               shadowBlur: 2
                           }
                       },
                       pointer: {           // 分隔线
					   show:false,
                           shadowColor: '#fff', //默认透明
                           shadowBlur: 1
                       },
                       title: {
                           textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                               fontWeight: 'bolder',
                               fontSize: 12,
                               fontStyle: 'italic',
                               color: '#fff',
                               shadowColor: '#fff', //默认透明
                               shadowBlur: 2
                           }
                       },
                        detail: {
                          // backgroundColor: 'rgba(30,144,255,0.8)',
                           borderWidth: 0.8,
                           borderColor: '#fff',
                           shadowColor: '#fff', //默认透明
                           shadowBlur: 3,
                           offsetCenter: [0, '55%'],       // x, y，单位px
                           textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                               fontWeight: 'bolder',
                               color: '#fff',
							   fontSize: 12,
                           },
						   formatter: '{value}%'
                       }, 
                       data: [{value: 90, name: '开机率'}]
                   },{
                       name: 'OEE率',
                       type: 'gauge',
                       splitNumber: 5,
                       radius: '95%',
					   center: ['72%', '55%'],    // 默认全局居中
					   splitLine: {
					   				show: false,
					   			},
                       axisLine: { 
						   show: false,// 坐标轴线
                           lineStyle: {       // 属性lineStyle控制线条样式
                               color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                               width: 1,
                               shadowColor: '#fff', //默认透明
                               shadowBlur: 2
                           }
                       },
                       axisLabel: {            // 坐标轴小标记
					   show: false,
                           fontWeight: 'bolder',
                           color: '#fff',
                           shadowColor: '#fff', //默认透明
                           shadowBlur: 2
                       },
                       axisTick: {            // 坐标轴小标记
					   show: false,
                           length: 3,        // 属性length控制线长
                           lineStyle: {       // 属性lineStyle控制线条样式
                               color: 'auto',
                               shadowColor: '#fff', //默认透明
                               shadowBlur: 2
                           }
                       },
                       splitLine: {           // 分隔线
                           length: 4,         // 属性length控制线长
                           lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                               width: 3,
                               color: '#fff',
                               shadowColor: '#fff', //默认透明
                               shadowBlur: 2
                           }
                       },
                       pointer: {           // 分隔线
					   show:false,
                           shadowColor: '#fff', //默认透明
                           shadowBlur: 1
                       },
                       title: {
                           textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                               fontWeight: 'bolder',
                               fontSize: 12,
                               fontStyle: 'italic',
                               color: '#fff',
                               shadowColor: '#fff', //默认透明
                               shadowBlur: 2
                           }
                       },
                        detail: {
                          // backgroundColor: 'rgba(30,144,255,0.8)',
                           borderWidth: 0.8,
                           borderColor: '#fff',
                           shadowColor: '#fff', //默认透明
                           shadowBlur: 3,
                           offsetCenter: [0, '55%'],       // x, y，单位px
                           textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                               fontWeight: 'bolder',
                               color: '#fff',
							   fontSize: 12,
                           },
						   formatter: '{value}%'
                       }, 
                       data: [{value: 88, name: 'OEE'}]
                   },
               ]
           };

       myChart.setOption(option);
       window.addEventListener("resize",function(){
           myChart.resize();
       });
    }
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var pieChart = echarts.init(document.getElementById('echart1'));
       option = {
           tooltip: {
               trigger: 'item',
               formatter: '{a} <br/>{b}: {c} ({d}%)'
           },
           legend: {
               orient: 'vertical',
               left: 10,
			   show:false,
               data: ['白班', '夜班', '注塑', '冲压', '间接支援', '外协', '差异']
           },
           series: [
               {
                   name: '1',
                   type: 'pie',
                   selectedMode: 'single',
                   radius: [0, '70%'],
       
                   label: {
                       formatter: '{b}:{c}',
                       position: 'inner'
                   },
                   labelLine: {
                       show: false
                   },
                   data: [
                       {value: 25, name: '注塑'},
                       {value: 8, name: '冲压'},
                       {value: 2, name: '间接支援'},
                       {value: 2, name: '外协'},
                       {value: 2, name: '差异'},
                       
                   ]
               },
               {
                   name: '1',
                   type: 'pie',
                   radius: ['85%', '95%'],
                   label: {
                       formatter: '{b}:{c}',
                       position: 'inner'
                      
                   },
                   data: [
                       {value: 39, name: '白班', selected: true},
                       {value: 28, name: '夜班'},
                   ]
               }
           ]
       };
      
       
       pieChart.setOption(option);
       window.addEventListener("resize",function(){
           pieChart.resize();
       });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var pieChart = echarts.init(document.getElementById('echart2'));
       option = {
			    calculable: false,
				legend: {
				        
				        left: 'left',
				        data: ['运行中', '未运行', '停机中'],
						textStyle: {
						   color: '#ffffff',
							fontSize:'12',
						}
				    },
			    series: [{
			        name: 'yunx',
			        type: 'pie',
			        radius: '65%',
			        center: ['50%', '68%'],
					label: {
						show: true,
						 position:'inside',
						 formatter: '{c}台'
					},
			        data: [{
			            value: 3,
			            name: '停机中'
			        }, {
			            value: 5,
			            name: '未运行'
			        }, {
			            value: 39,
			            name: '运行中'
			        }]
			    }]
			};
      
       
       pieChart.setOption(option);
       window.addEventListener("resize",function(){
           pieChart.resize();
       });
    }
function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

       option = {
           legend: {textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }},
		grid: {
		    left: '10',
			top: '30',
		    right: '10',
		    bottom: '10',
		    containLabel: true
		},
           tooltip: {},
          /* dataset: {
               source: [
                   ['product', '产出', '入库数', '目标'],
                   ['10时', 43.3, 85.8, 93.7],
                   ['12时', 83.1, 73.4, 55.1],
                   ['14时', 86.4, 65.2, 82.5],
                   ['16时', 72.4, 53.9, 39.1]
               ]
           }, */
           xAxis: {type: 'category', 
		   data:['10时', '12时', '14时','16时'],
		   axisLabel:  {
		                   textStyle: {
		    					color: "rgba(255,255,255,.6)",
		   					fontSize:12,
		                   },
		               },
		           axisLine: {
		   			lineStyle: { 
		   				color: 'rgba(255,255,255,.2)'
		   			}
		   
		           },
		},
		legend: {
		        data:['产出', '入库数', '目标'],
				textStyle: {
				   color: 'rgba(255,255,255,.5)',
					fontSize:'12',
				}
		    },
          // yAxis: {},
		  yAxis: [{
		      type: 'value',
		      axisLabel: {
		         //formatter: '{value} %'
		  		show:true,
		  		 textStyle: {
		  				color: "rgba(255,255,255,.6)",
		                  fontSize: '12',
		              },
		      },
		      axisTick: {
		          show: false,
		      },
		      axisLine: {
		          show: true,
		          lineStyle: {
		              color: "rgba(255,255,255,.1	)",
		              width: 1,
		              type: "solid"
		          },
		      },
		      splitLine: {
		          lineStyle: {
		             color: "rgba(255,255,255,.1)",
		          }
		      }
		  }],
           // Declare several bar series, each will be mapped
           // to a column of dataset.source by default.
           series: [
               {type: 'bar',name: '产出',data:[43.3, 85.8, 93.7,69]},
               {type: 'bar',name: '入库数',data:[83.1, 73.4, 55.1,69]},
               {type: 'bar',name: '目标',data:[43.3, 85.8, 93.7,69]},
           ]
       };

      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽', '四川'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [2, 3, 3, 9, 15, 12, 6, 4, 6, 7, 4, 10],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		    legend: {
    top:'0%',
        data:['安卓','IOS'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '安卓',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#0184d5',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#0184d5',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4,3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]

    }, 
{
        name: 'IOS',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#00d887',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#00d887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]

    }, 
	
		 ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
var placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
option = {
	color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} "
	},
	legend: {
		itemWidth: 10,
        itemHeight: 10,
		itemGap: 12,
		bottom: '3%',
		
		data: ['浙江', '上海', '广东', '北京', '深圳'],
		textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
	},
	
	series: [
		{
		name: '浙江',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['59%', '70%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 80,
			name: '01'
		}, {
			value: 20,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '上海',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['49%', '60%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 70,
			name: '02'
		}, {
			value: 30,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '广东',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['39%', '50%'],
		itemStyle: dataStyle,
		data: [{
			value: 65,
			name: '03'
		}, {
			value: 35,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '北京',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 60,
			name: '04'
		}, {
			value: 40,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '深圳',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['20%', '30%'],
		itemStyle: dataStyle,
		data: [{
			value: 50,
			name: '05'
		}, {
			value: 50,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1')); 
option = {
   
	    title: [{
        text: '年龄分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['0岁以下','20-29岁','30-39岁','40-49岁','50岁以上'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'年龄分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                  color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:1, name:'0岁以下'},
                {value:4, name:'20-29岁'},
                {value:2, name:'30-39岁'},
                {value:2, name:'40-49岁'},
                {value:1, name:'50岁以上'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
option = {
   
	    title: [{
        text: '职业分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['电子商务','教育','IT/互联网','金融','学生','其他'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'年龄分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:5, name:'电子商务'},
                {value:1, name:'教育'},
                {value:6, name:'IT/互联网'},
                {value:2, name:'金融'},
                {value:1, name:'学生'},
                {value:1, name:'其他'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
option = {
	    title: [{
        text: '兴趣分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['汽车','旅游','财经','教育','软件','其他'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'兴趣分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                   color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:2, name:'汽车'},
                {value:3, name:'旅游'},
                {value:1, name:'财经'},
                {value:4, name:'教育'},
                {value:8, name:'软件'},
                {value:1, name:'其他'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})



		
		
		


		









