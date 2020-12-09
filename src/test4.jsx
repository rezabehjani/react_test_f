import React from 'react';
import Test from './test';
import './App.css';
import './Style.css';
import P from './img/person1.svg';
import P2 from './img/person2.svg';
import P3 from './img/person3.svg';
import P4 from './img/person4.svg';
import Blue from './img/blue-circle.svg';
import Creat from './img/create.svg';
class Test4 extends React.Component {
   constructor(props){
      super(props);
      this.test=new Test();
   }
    render() {

       return (
          <div className="foot">
              <div className="div-img">
                  <img src={P} className="img-foot"></img>
                  <span>امیر</span>
              </div>
              <div className="div-img">
                  <div>
                  <img src={P2} className="img-foot"></img>
                  <img src={Blue} className="img-blue-circle"></img>
                  <img src={Creat} className="img-create"></img>
                  </div>
                  <span>سارا</span>
              </div>
              <div className="div-img">
                  <img src={P4} className="img-foot"></img>
                  <span>محمد</span>
              </div>
              <div className="div-img">
                  <img src={P3} className="img-foot"></img>
                  <span>مامان</span>
              </div>
          </div>

       );
    }
 }
 export default Test4;