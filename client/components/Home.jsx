import React from 'react'
import createReactClass from 'create-react-class'
import ExampleChart from './ExampleChart.jsx'
// import Dropdown from './Dropdown.jsx'

const Home = createReactClass({
	render(){
  	return (
      <div>
        <h1>Home</h1>
        {/*<Dropdown />*/}
        <ExampleChart />
      </div>

    );
  }
})

export default Home
