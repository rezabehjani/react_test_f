import React from 'react';
import Test from './test';
import './App.css';
import './Style.css';
class Test2 extends React.Component {
   constructor(props){
      super(props);
      this.test=new Test();
   }
    render() {

       return (
          <div className="C-sec">
            
          </div>

       );
    }
 }
 export default Test2;