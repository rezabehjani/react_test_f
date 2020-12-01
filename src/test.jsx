import React from 'react';
import Test2 from './test2';
class Test extends React.Component {
    
        p(){
    
             console.log('print welcome!!');
             document.write("hi");
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