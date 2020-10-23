export default function optionChoose(chartType , data) {
  let option: any;
  switch (chartType) {
    case 'Pie':
    {
      data = [
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
      ];
      option = {
        series : [
          {
            name: '访问来源',
            type: 'pie',
            center: ['50%', '50%'],
            radius: [0, '60%'],
            data: data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
    }
      break;
    case 'Bar':
    {
      data = {
        dimensions: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        measures: [{
          data: [10, 52, 200, 334, 390, 330, 220]
        }]
      }
      option = {
        tooltip: {
        },
        color: ['#3398DB'],
        xAxis : [
          {
            type: 'category',
            data: [],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : []
      };
      if (data && data.dimensions && data.measures) {
        option.xAxis[0].data = data.dimensions.data
        option.series = data.measures.map(item => {
          return {
            ...item,
            type:'bar',
          }
        })
      }
    }
      break;

    case 'Line': {
      data = [Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10];
      let xArr: any = [],
        y1Arr: any = [],
        y2Arr: any = [];
      data.map((item: any) => {
        xArr.push(item);
        y1Arr.push(item);
        y2Arr.push(item + 2);
      })

      const colors = ['#E5BF83', '#6BCBA9'];
      option = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },


        legend: {
          data: ['金额', '数据统计']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            //
            data: xArr
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '订单金额',
            min: 0,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },

          {
            type: 'value',
            name: '数量',
            min: 0,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          }
        ],
        series: [
          {
            name: '订单金额',
            type: 'line',
            data: y2Arr,
            smooth: true,
            areaStyle: {
              color: colors[0]
            }
          },

          {
            name: '数量',
            type: 'line',
            data: y1Arr,
            smooth: true
          }
        ]
      }
    }

      break;
    case 'Funnel':
    {
      data =[
        {value: 60, name: '访问'},
        {value: 40, name: '咨询'},
        {value: 20, name: '订单'},
        {value: 80, name: '点击'},
        {value: 100, name: '展现'}]
      option = {
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c}%"
        },
        legend: {
          data: data.name
        },
        calculable: true,
        series: [
          {
            type:'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              normal: {
                show: true,
                position: 'inside'
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1
              }
            },
            data: data
          }
        ]
      }
    }
      break;
    case 'Gauge':
    {
      data = [{
        value: 70,
        name: '完成率',
      }];
      option = {
        backgroundColor: "#ffffff",
        color: ["#37A2DA", "#32C5E9", "#67E0E3"],
        series: [{
          name: '业务指标',
          type: 'gauge',
          detail: {
            formatter: '{value}%'
          },
          axisLine: {
            show: true,
            lineStyle: {
              width: 30,
              shadowBlur: 0,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            }
          },
          data: data

        }]
      };
    }
      break;
    case 'Heatmap':
    {
      data = {
        xAxis: ['1', '2', '3', '4', '5','6','7'],
        yAxis: ['a', 'b', 'c', 'd', 'v'],
        data: [
          [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2],
          [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2],
          [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7],
          [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6],
          [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9],
          [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7],
          [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]
        ]
      };
      let xAxis = data.xAxis
      let yAxis = data.yAxis
      let dataValue = data.data
      option = {
        tooltip: {
        },
        animation: false,
        grid: {
          height: '50%',
          y: '20%'
        },
        xAxis: {
          type: 'category',
          data: xAxis,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: yAxis,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%',
          show:false
        },
        series: [{
          type: 'heatmap',
          data: dataValue,
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
    }
      break;
    case 'Scatter':
    {
      data = [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
      ]
      option = {
        xAxis: {},
        yAxis: {},
        series: [{
          symbolSize: 20,
          data: data,
          type: 'scatter'
        }]
      };
    }
      break;
    case 'Graph':
    {
      data = [{
        name: '节点1',
        x: 300,
        y: 300,
        itemStyle: {
          color: '#37A2DA'
        }
      }, {
        name: '节点2',
        x: 800,
        y: 300,
        itemStyle: {
          color: '#32C5E9'
        }
      }, {
        name: '节点3',
        x: 550,
        y: 100,
        itemStyle: {
          color: '#9FE6B8'
        }
      }, {
        name: '节点4',
        x: 550,
        y: 500,
        itemStyle: {
          color: '#FF9F7F'
        }
      }];
      option = {
        color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            data: data,
            links: [{
              source: 0,
              target: 1,
              symbolSize: [5, 20],
              label: {
                normal: {
                  show: true
                }
              },
              lineStyle: {
                normal: {
                  width: 4,
                  curveness: 0.2
                }
              }
            }, {
              source: '节点2',
              target: '节点1',
              label: {
                normal: {
                  show: true
                }
              },
              lineStyle: {
                normal: { curveness: 0.2 }
              }
            }, {
              source: '节点1',
              target: '节点3'
            }, {
              source: '节点2',
              target: '节点3'
            }, {
              source: '节点2',
              target: '节点4'
            }, {
              source: '节点1',
              target: '节点4'
            }],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
              }
            }
          }
        ]
      };
    }
      break;
    case 'K':
    {
      data={
        dimensions: {
          data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
        },
        measures: [{
          data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42]
          ]
        }]
      }
      option = {
        xAxis: {
          data: []
        },
        yAxis: {},
        series: []
      };
      if (data && data.dimensions && data.measures) {
        option.xAxis.data = data.dimensions.data
        option.series = data.measures.map(item => {
          return {
            ...item,
            type: 'k',
          }
        })
      }
    }
      break;
    case 'Move':
    {
      data = {
        dimensions: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        measures: [{
          data: [10, 52, 200, 334, 390, 330, 220, 334, 390, 330, 220, 10, 52, 200,]
        }]
      }
      option = {
        tooltip: {
        },
        color: ['#3398DB'],
        xAxis : [
          {
            type: 'category',
            data: [],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        dataZoom: [
          {
            type: 'slider',
            start: 0,
            show: false,
            end: 50,
          },
          {
            type: 'inside',
            start: 0,
            end: 50,
            filterMode: 'filter',
          },
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : []
      };
      if (data && data.dimensions && data.measures) {
        option.xAxis[0].data = data.dimensions.data
        option.series = data.measures.map(item => {
          return {
            ...item,
            type:'bar',
          }
        })
      }
    }
      break
    case '':
    {

    }
      break
    case 'Add':
    {
      data = {
        barData: [709,1917,2455,2610,1719,1433,1544,3285,5208,3372,2484,4078],
        lineData: [1036,3693,2962,3810, 2519,1915,1748, 4675, 6209,4323,2865,4298]
      };
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff"
            }
          },
        },
        grid: {
          "borderWidth": 0,
          "top": 110,
          "bottom": 95,
          textStyle: {
            color: "#fff"
          }
        },
        dataZoom: [
          {
            type: 'slider',
            start: 0,
            show: false,
            end: 60,
          },
          {
            type: 'inside',
            start: 0,
            end: 60,
            filterMode: 'filter',
          },
        ],
        xAxis: [{
          type: "category",
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0,
          },
          data: [1,2,3,4,5,6,7,8,9,10,11,12],
        }],
        yAxis: [{
          type: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
          },
          splitArea: {
            show: false
          },
        }],
        series: [
          {
            name: "女",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            label: {
              normal: {
                show: false,
                position: 'top',
                color: '#000'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: '#333333',
              }
            },
            data: data.barData,
          },
          {
            name: "男",
            type: "line",
            stack: "总量",
            symbolSize: 10,
            symbol:'circle',
            itemStyle: {
              normal: {
                color: "green",
                barBorderRadius: 0,
                label: {
                  show: false,
                  position: "bottom",
                }
              }
            },
            data: data.lineData
          },
        ]
      }
    }
      break


    default:
      option = null
  }
  return option
}
