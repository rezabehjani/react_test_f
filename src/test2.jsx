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
             {this.test.show_atu()}
             <Test/>
             <button onClick={this.test.show}>show</button>
             {this.test.sum(2,3)}
             <br/>
          </div>

       );
    }
 }
 export default Test2;