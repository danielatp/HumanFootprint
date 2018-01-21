import React, { Component } from 'react'
import createReactClass from 'create-react-class'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

export default class AreaChartCO2 extends Component{

  constructor(props){
    super(props)

  }

  render(){
  	return (
    	<AreaChart width={1000} height={400} data={this.props.data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <defs>
          <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.9}/>
            <stop offset="100%" stopColor="#82ca9d" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="year"/>
        <YAxis
          ticks={this.props.ticks}
          domain={this.props.domain}/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='CO2' stroke='#82ca9d' fillOpacity={1} fill="url(#colorCO2)" />
      </AreaChart>
    );
  }
}
