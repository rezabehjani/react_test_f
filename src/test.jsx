import React from 'react';
import Test2 from './test2';
import './App.css';
import './Style.css';
import Temper from './img/temperature.svg';
class Test extends React.Component {
  
    render() {
       
       return (
          <div className="Green-sec">
             <div className="text-green">
                <div className="text-green2">
                <b>دمای محیط</b>
                <span>اتاق خواب</span>
                </div>
                <div>
                   <b className="number">۲۸°</b>
                </div>
                <div>
                   <img src={Temper} className="img"></img>
                </div>
             </div>
             <div className="thermometer">
                <div className="plus"></div>
                <div className="liner"></div>
                <div className="mini"></div>
             </div>
          
          </div>
       );
    }
 }
 export default Test;