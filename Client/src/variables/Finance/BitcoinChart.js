import React, { Component} from 'react';
import ChartistGraph from 'react-chartist';


export default class BitcoinChart extends Component {
  
  
    render() {
    
    //var newdata = fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=gbp&days=7&interval=daily")
    
    var data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      series:  [[29705.190803107915, 28409.950475379133, 26377.788985045434, 24832.307040311738, 27444.016860463864, 28675.138488598852, 27370.823688554192]]
    };
 
    var options = {
      high: 30000,
      low: 22000,
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