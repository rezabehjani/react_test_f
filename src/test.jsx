import React from 'react';
import Test2 from './test2';
class Test extends React.Component {
   constructor(props){
      super(props);
      const name='faeze';
   }
    
      show()
      {
    
         console.log('welcome!!');
      }
      sum(a,b) 
      {
         console.log(a+b)
      }
      show_atu()
      {
         console.log('start class component2!')
      }
  
    render() {
       
       return (
          <div>
             <h1>my test react!!</h1>
          </div>
       );
    }
 }
 export default Test;