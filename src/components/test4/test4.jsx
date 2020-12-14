import React from 'react';
import '../test4/test4.css';
import P from '../../asset/images/icons/person1.svg';
import P2 from '../../asset/images/icons/person2.svg';
import P3 from '../../asset/images/icons/person3.svg';
import P4 from '../../asset/images/icons/person4.svg';
import Blue from '../../asset/images/icons/blue-circle.svg';
import Creat from '../../asset/images/icons/create.svg';
class Test4 extends React.Component {
  
    render() {

       return (
          <div className="foot">
              <div className="div-img">
                  <img src={P} className="img-foot"></img>
                  <span>امیر</span>
              </div>
              <div className="div-img">
                 
                  <img src={P2} className="img-foot"></img>
                  <img src={Blue} className="img-blue-circle"></img>
                  <img src={Creat} className="img-create"></img>
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