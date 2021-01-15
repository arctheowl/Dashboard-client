import React, { Component} from 'react';
//import { render } from '@testing-library/react';

class ApiCall extends Component {
   constructor(props) {
      super(props) ;

         this.state = {
            data : [],
            isLoaded : false,
         }
}

fetchData() {
   fetch('http://172.22.132.200:8081')
   .then(res => res.json() ) 
   .then(json => {
      console.log(json) 
      this.setState ({
        isLoaded: true,
        data: json,
     })
   });
}


componentDidMount() {

   this.fetchData();
   
}

render() {
   var{isLoaded, data}= this.state;
   if(!isLoaded) {
      return <div> Loading....</div>
   }
   else {
      return data.Name;
   }
}

}
export default ApiCall;;

//{items.map(items => (
//                   <li key = {items.id }>
//                     {items.name}| {items.email}
//                  </li>
//               ))}