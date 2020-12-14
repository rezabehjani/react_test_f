import React from 'react';
import '../test5/test5.css';
import Img from '../../asset/images/icons/Relaxinghome-rafiki.svg';

class Test5 extends React.Component {

    render() {
       
       return (
          <div className="box-top">
         <div className="text">   
            <b>روز بخیر!</b>
             <p>شنبه     1399/7/26      07:38  ق.ظ</p>
              <p>  <b>+18</b> سانتی گراد</p>
             </div>
             <div> <img src={Img} className="imgg"></img></div>
          </div>
       );
    }
 }
 export default Test5;