import React, { Component } from 'react'
import createReactClass from 'create-react-class'
// import LineChartCO2 from './LineChartCO2.jsx'
import data from '../data';
import AreaChartCO2 from './AreaChartCO2.jsx'
import ZoomChartCO2 from './ZoomChartCO2.jsx'

export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: data,
      categories: Object.keys(data),
      currentCategory: '- CHOOSE ONE -',
      domain:[],
      ticks:[]
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  handleCategoryChange(event){
    const CO2Ticks = [300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420];
    const CO2Domain = [300, 420];

    const CelsiusTicks = [-0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    const CelsiusDomain = [-0.50, 1];

    if(event.target.value === 'CO2'){
      this.setState({
        currentCategory: event.target.value,
        domain:CO2Domain,
        ticks:CO2Ticks
      })
    }

    if(event.target.value === 'Celsius'){
      this.setState({
        currentCategory: event.target.value,
        domain:CelsiusDomain,
        ticks:CelsiusTicks
      })
    }

  }

  render(){
    return (
      <div>
        <h1>Home's Vital Signs</h1>
        <select name="category" onChange={this.handleCategoryChange}>
          <option default >- CHOOSE ONE -</option>
          {this.state.categories.map(category => {
            return (
              <option key={category} name={category}>{category}</option>
            )
          })}
        </select>
        {/*<LineChartCO2 />*/}
        <div className="chart-container">
        {this.state.currentCategory === '- CHOOSE ONE -' ?
          <ZoomChartCO2 />
          :
          <AreaChartCO2
            data={this.state.data[this.state.currentCategory]}
            currentCategory={this.state.currentCategory}
            domain= {this.state.domain}
            ticks = {this.state.ticks} />

        }
        </div>
      </div>

    );
  }
}
