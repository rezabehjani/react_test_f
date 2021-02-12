import React from 'react';
import '../test7/test7.css';
import Img from '../../asset/images/icons/edit-icon.svg';


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