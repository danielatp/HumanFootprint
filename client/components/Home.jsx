import React, { Component } from 'react'
import createReactClass from 'create-react-class'
// import LineChartCO2 from './LineChartCO2.jsx'
import data from '../data';
import AreaChartCO2 from './AreaChartCO2.jsx'

export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: data,
      categories: Object.keys(data),
      currentCategory: '- CHOOSE ONE -'
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  handleCategoryChange(event){
    this.setState({currentCategory: event.target.value})
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
          <div>hello</div>
          :
          <AreaChartCO2 data={this.state.data[this.state.currentCategory]} />
        }
        </div>
      </div>

    );
  }
}
