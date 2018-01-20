import React from 'react'
import createReactClass from 'create-react-class'
import LineChartCO2 from './LineChartCO2.jsx'
import AreaChartCO2 from './AreaChartCO2.jsx'
// import Dropdown from './Dropdown.jsx'

const Home = createReactClass({
	render(){
  	return (
      <div>
        <h1>Home</h1>
        {/*<Dropdown />*/}
        <LineChartCO2 />
        <AreaChartCO2 />
      </div>

    );
  }
})

export default Home
