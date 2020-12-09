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
            <h1>روز بخیر!</h1>
             <h2>شنبه     1399/7/26      07:38  ق.ظ</h2>
             <h1>+18سانتی گراد</h1>
             </div>
             <div> <img src={Img} className="imgg"></img></div>
          </div>
       );
    }
 }
 export default Test5;