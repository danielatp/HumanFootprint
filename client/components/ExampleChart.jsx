import React from 'react'
// import ReactDOM from 'react-dom'
import data from '../data'
import createReactClass from 'create-react-class'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const ExampleChart = createReactClass({
	render(){
  	return (
    	<LineChart width={1000} height={400} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="year"/>
       <YAxis
          ticks={[300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420]}
          domain={[300, 420]}/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="CO2" stroke="#8884d8" activeDot={{r: 8}}/>
      {/* <Line type="monotone" dataKey="CO2" stroke="#82ca9d" />*/}
      </LineChart>
    );
  }
})


export default ExampleChart
