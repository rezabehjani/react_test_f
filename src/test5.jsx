import React from 'react';
import './App.css';
import './Style.css';
import Img from './img/Relaxinghome-rafiki.svg';

class Test5 extends React.Component {
   constructor(props){
      super(props);
     
   }
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