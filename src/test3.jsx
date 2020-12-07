import React from 'react';
import Test from './test';
import './App.css';
import './Style.css';
import Img from './img/senario-m.svg';
class Test3 extends React.Component {
   constructor(props){
      super(props);
      this.test=new Test();
   }
    render() {

       return (
          <div className="Blue-sec">
             <div className="text-blue">
                <b className="txt">سناریو اجرا شده</b>
                <span className="txt">صبح - ۰۷:۱۵</span>
                <b className="txt">سناریو در حال اجرا</b>
                <span className="txt">بخش موزیک - ۱۷:۰۰</span>
             </div>
             <img src={Img} className="img"></img>
          </div>

       );
    }
 }
 export default Test3;