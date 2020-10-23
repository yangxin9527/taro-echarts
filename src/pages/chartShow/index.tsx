import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Charts from './components/charts'
import './index.less'
import optionChoose from './utils'



class ChartShow extends Component {

  state={
    option:null,
  }
  componentDidMount() {
    this.init();
  }
  // 获取渲染数据
  getFakeData(){
    return ['实际根据需要修改']
  }
  init(){
    let type = Taro.Current.router?.params?.type;
    this.setState({
      option:optionChoose(type,this.getFakeData())
    })
  }

  render () {
    return (
      <View className='pie'>
        <Charts option={this.state.option} />
      </View>
    )
  }
}

export default ChartShow
