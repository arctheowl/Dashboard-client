import React, { Component} from 'react';
import ChartistGraph from 'react-chartist';


export default class TetherChart extends Component {
  
  
    render() {
    
    //var newdata = fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=gbp&days=7&interval=daily")
    
    var data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      series:  [[0.7395154556312615, 0.7462673484196825, 0.7336339450286042, 0.735932406534571, 0.7290993576432958,  0.7363001194364865, 0.7349601527390435]]
    };
 
    var options = {
      high: 0.77,
      low: 0.71,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };
 
    var type = 'Line'
 
    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}