import React, { Component} from 'react';
//import { render } from '@testing-library/react';

class ETHPrice extends Component {
   constructor(props) {
      super(props) ;

         this.state = {
            data : [],
            isLoaded : false,
         }
}

fetchData() {
   fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=gbp')
   .then(res => res.json() ) 
   .then(json => {
      //console.log(json) 
      this.setState ({
        isLoaded: true,
        data: json["ethereum"]["gbp"],
     })
   });
}


componentDidMount() {

   this.fetchData();
   var {data}= this.state
   console.log(data[0])
}

render() {
   var{isLoaded, data}= this.state;
   if(!isLoaded) {
      return <div> Loading....</div>
   }
   else {
      return data;
   }
}

}
export default ETHPrice;;

//{items.map(items => (
//                   <li key = {items.id }>
//                     {items.name}| {items.email}
//                  </li>
//               ))}