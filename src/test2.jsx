import React from 'react';
import Test from './test';
class Test2 extends React.Component {
   constructor(props){
      super(props);
      this.test=new Test();
      
   }
    render() {

       return (
          <div>
             <br/>
             <Test/>
             <button onClick={this.test.p}>show</button>

          </div>
       );
    }
 }
 export default Test2;