import React, { Component} from 'react';
import ChartistGraph from 'react-chartist';


export default class EthChart extends Component {
  
  
    render() {
    
    //var newdata = fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=gbp&days=7&interval=daily")
    
    var data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      series:  [[937.9726178045274, 808.2068741196956, 764.912667229125, 829.4278235377695, 889.2616985844592, 862.390536789132, 899.6371572433278]]
    };
 
    var options = {
      high: 1000,
      low: 700,
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