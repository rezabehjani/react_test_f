import React from 'react';
import '../test/test.css';
import Temper from '../../asset/images/icons/temperature.svg';
class Test extends React.Component {
  
    render() {
       
       return (
          <div className="Green-sec">
             <div className="text-green">
                <div className="text-green2">
                <b className="font">دمای محیط</b>
                <span  className="font"> اتاق خواب</span>
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