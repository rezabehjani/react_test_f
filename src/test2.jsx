import React from 'react';
import Test from './test';
import './App.css';
import './Style.css';
import Update from './img/update.svg';
import Keyboard from './img/keyboard_arrow_down.svg';
class Test2 extends React.Component {
   constructor(props){
      super(props);
      this.test=new Test();
   }
    render() {

       return (
         <div className="Orange-sec">
            <div class="text-orange">
                  <b className="txt">بروزرسانی اخیر</b>
                  <span className="txt">کلید تک پل </span>
                  <span className="txt">پریز اتاق خواب</span>
                   <span className="txt">کلید تک پل</span>
            </div>
            <div className="text-orange-2">
               <img src={Update} className="img"></img>
               <div className="text-orange-3">
                     <span className="tt">همه</span>
                     <img src={Keyboard} className="keyboard_arrow_down"></img>
               </div>
                  
            </div>
         </div>

       );
    }
 }
 export default Test2;