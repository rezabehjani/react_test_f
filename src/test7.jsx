import React from 'react';
import './App.css';
import './Style.css';
import Img from './img/edit-icon.svg';


class Test7 extends React.Component {
   constructor(props){
      super(props);
     
   }
    render() {
       
       return (
          <div className="box-center">
        <button className="edit"><img src={Img}></img>ویرایش</button>
        <span className="font">دسترسی سریع</span>
           
          </div>
       );
    }
 }
 export default Test7;