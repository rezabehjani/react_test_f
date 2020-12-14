import React from 'react';
import '../test2/test2.css';
import Update from '../../asset/images/icons/update.svg';
import Keyboard from '../../asset/images/icons/keyboard_arrow_down.svg';
class Test2 extends React.Component {

    render() {

       return (
         <div className="Orange-sec">
            <div class="text-orange">
                  <b className="txt">بروزرسانی اخیر</b>
                  <span className="txt ">کلید تک پل </span>
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