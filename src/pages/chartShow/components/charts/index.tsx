import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.less'

// @ts-ignore
import * as echarts from "../ec-canvas/echarts";

type PageStateProps = {
  option?:any
}

interface Charts {
  props: PageStateProps;
}

function ecReturn(option) {
  return function initChart(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height
    })
    canvas.setChart(chart)
    chart.setOption(option)
    return chart
  }
}

class Charts extends Component {

  state={
    option:this.props.option,
    ec:{
      lazyLoad: true
    }
  }

  componentWillReceiveProps(nextProps: Readonly<{option?:any}>) {
    if(JSON.stringify(nextProps.option)!==JSON.stringify(this.state.option)){
      // eslint-disable-next-line react/no-will-update-set-state
      this.setState({
        option:nextProps.option
      },()=>{
        this.init();
      })
    }
  }


  componentDidMount() {
    this.init();
  }
  init(option = this.state.option){
    if(option){
      this.setState({
        ec:null
      },()=>{
        setTimeout(()=>{
          this.setState({
            ec:{
              onInit:ecReturn(option)
            }
          })
        })
      })
    }

  }

  render () {
    return (
      <View className='charts-wrap'>
        {this.state.ec?<ec-canvas ec={this.state.ec} />:<View>empty</View>}
      </View>
    )
  }
}

export default Charts
