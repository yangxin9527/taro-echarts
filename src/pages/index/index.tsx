import React, { Component } from 'react'
import {View, Image, Text, Button} from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro';
import './index.less'
import PieImage from '../../img/icons/pie.png'
import BarImage from '../../img/icons/bar.png'
import LineImage from '../../img/icons/line.png'
import FunnelImage from '../../img/icons/funnel.png'
import GaugeImage from '../../img/icons/gauge.png'
import HeatmapImage from '../../img/icons/heatmap.png'
import ScatterImage from '../../img/icons/scatter.png'
import GraphImage from '../../img/icons/graph.png'
import KImage from '../../img/icons/k.png'

type PageStateProps = {
  store: any
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {
  state = {
    charts: [
      // eslint-disable-next-line import/no-commonjs
      { id: 'Pie', name: '饼图', img: PieImage },
      { id: 'Bar', name: '柱状图', img: BarImage},
      { id: 'Line', name: '折线图', img: LineImage },
      { id: 'Funnel', name: '漏斗图', img: FunnelImage },
      { id: 'Gauge', name: '仪表盘', img: GaugeImage },
      { id: 'Heatmap', name: '热力图', img: HeatmapImage },
      { id: 'Scatter', name: '散点图', img: ScatterImage },
      { id: 'Graph', name: '关系图', img: GraphImage },
      { id: 'K', name: 'K 线图', img: KImage  }
    ],
    bottom: [
      { id: 'Move', name: '可滑动的图表'},
      { id: 'Add', name: '多图表结合在一起' }
    ]
  }

  gotoEcharts(type) {
    Taro.navigateTo({ url: `/pages/chartShow/index?type=${type}` });
  }

  render () {
    return (
      <View className='panel'>
        <View className='tips' onClick={()=>{
          Taro.setClipboardData({
            data: 'https://github.com/yangxin9527/taro-echarts',
            success: function () {
              Taro.showToast({
                title:'已复制'
              })
            }
          })
        }}
        >
          仓库地址:https://github.com/yangxin9527/taro-echarts(点击复制)
        </View>
        {this.state.charts.map((chart) => {
          return (
            <View
              className='panel-item'
              onClick={this.gotoEcharts.bind(this, chart.id)}
              key={chart.id}
            >
              <Image className='panel-item-img' src={chart.img} mode='aspectFit' />
              <Text>{chart.name}</Text>
            </View>
          );
        })}

        {this.state.bottom.map((item, index) => {
          return (
            <Button
              className='button'
              key={index}
              onClick={this.gotoEcharts.bind(this, item.id)}
            >
              {item.name}
            </Button>
          );
        })}

      </View>
    )
  }
}

export default Index
