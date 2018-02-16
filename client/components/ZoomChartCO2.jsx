import React, {Component} from 'react'
import createReactClass from 'create-react-class'
import { Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea } from 'recharts';
import data from '../data'

const getAxisYDomain = (from, to, ref, offset) => {
	const refData = data.slice(from-1, to);
  let [ bottom, top ] = [ refData[0][ref], refData[0][ref] ];
  refData.forEach( d => {
  	if ( d[ref] > top ) top = d[ref];
    if ( d[ref] < bottom ) bottom = d[ref];
  });
  return [ (bottom|0) - offset, (top|0) + offset ]
};

const initialState = {
  info: data.CO2,
  left : 'dataMin',
  right : 'dataMax',
  refAreaLeft : '',
  refAreaRight : '',
  top : 'dataMax+1',
  bottom : 'dataMin-1',
  top2 : 'dataMax+20',
  bottom2 : 'dataMin-20',
  animation : true
};

export default class ZoomChartCO2 extends Component {

	constructor(props) {
    super(props);
    this.state = initialState;
  }

  zoom(){
  	let { refAreaLeft, refAreaRight, info } = this.state;
		if ( refAreaLeft === refAreaRight || refAreaRight === '' ) {
    	this.setState( () => ({
      	refAreaLeft : '',
        refAreaRight : ''
      }) );
    	return;
    }

		// xAxis domain
	  if ( refAreaLeft > refAreaRight )
    		[ refAreaLeft, refAreaRight ] = [ refAreaRight, refAreaLeft ];

		// yAxis domain
    const [ bottom, top ] = getAxisYDomain( refAreaLeft, refAreaRight, 'cost', 1 );
    const [ bottom2, top2 ] = getAxisYDomain( refAreaLeft, refAreaRight, 'impression', 50 );

    this.setState( () => ({
      refAreaLeft : '',
      refAreaRight : '',
    	info : data.CO2.slice(),
      left : refAreaLeft,
      right : refAreaRight,
      bottom, top, bottom2, top2
    } ) );
  }

	zoomOut() {
  	const { info } = this.state;
  	this.setState( () => ({
      info : data.CO2.slice(),
      refAreaLeft : '',
      refAreaRight : '',
      left : 'dataMin',
      right : 'dataMax',
      top : 'dataMax+1',
      bottom : 'dataMin',
      top2 : 'dataMax+50',
      bottom: 'dataMin+50'
    }) );
  }

  render() {
    const { info, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2 } = this.state;

    return (
      <div className="highlight-bar-charts">
        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.zoomOut.bind( this )}
        >
          Zoom Out
        </a>


        <p>Highlight / Zoom - able Line Chart</p>
          <LineChart
            width={800}
            height={400}
            info={data.CO2}
            onMouseDown = { (e) => this.setState({refAreaLeft:e.activeLabel}) }
            onMouseMove = { (e) => this.state.refAreaLeft && this.setState({refAreaRight:e.activeLabel}) }
            onMouseUp = { this.zoom.bind( this ) }
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis
              allowDataOverflow={true}
              dataKey="name"
              domain={[left, right]}
              type="number"
            />
            <YAxis
              allowDataOverflow={true}
              domain={[bottom, top]}
              type="number"
              yAxisId="1"
             />
            <YAxis
              orientation="right"
              allowDataOverflow={true}
              domain={[bottom2, top2]}
              type="number"
              yAxisId="2"
             />
            <Tooltip/>
            <Line yAxisId="1" type='natural' dataKey='cost' stroke='#8884d8' animationDuration={300}/>
            <Line yAxisId="2" type='natural' dataKey='impression' stroke='#82ca9d' animationDuration={300}/>

            {
            	(refAreaLeft && refAreaRight) ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight}  strokeOpacity={0.3} /> ) : null

            }

          </LineChart>

      </div>
    );
  }
}
