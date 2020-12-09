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
        <b>دسترسی سریع</b>
           
          </div>
       );
    }
 }
 export default Test7;