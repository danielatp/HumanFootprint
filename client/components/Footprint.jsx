import React, { Component } from 'react';
import FootprintSVG from './FootprintSVG.jsx';

export default class Footprint extends Component{
  constructor(props){
    super(props)
    this.state = {
      color: 'rgb(0,0,0)'
    }
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver(event){
    var posX = Math.floor(event.screenX/4)
    this.setState(
    {color: `rgb(${posX},${posX},${posX})`}
    )
  }

  render(){
    return (
      <div className="footprint-container">
        <FootprintSVG className ="svg" color={this.state.color} onMouseOver={this.onMouseOver} />
      </div>
    )
  }
}
