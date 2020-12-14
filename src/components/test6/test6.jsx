import React from 'react';
import '../test6/test6.css';
import Img from '../../asset/images/icons/lamp3.svg';
import Img2 from '../../asset/images/icons/tv.svg';
import Img3 from '../../asset/images/icons/lamplight.svg';
import Img4 from '../../asset/images/icons/socket.svg';
import Img5 from '../../asset/images/icons/household.svg';
import Img6 from '../../asset/images/icons/del-icon.svg';

class Test6 extends React.Component {
    render() {
       
       return (
          <div className="box-botton">
            <div className="icon">
             <div className="x"> <img src={Img} className="x-icon"></img><img src={Img6}className="del-icon" ></img></div>
             <div className="x"> <img src={Img2} className="x-icon"></img><img src={Img6}className="del-icon" ></img></div> 
             <div className="x"> <img src={Img3} className="x-icon"></img><img src={Img6}className="del-icon" ></img></div> 
             <div className="x"> <img src={Img4} className="x-icon"></img><img src={Img6}className="del-icon" ></img></div> 
             <div className="x"> <img src={Img5} className="x-iconn"></img><img src={Img6}className="del-icon" ></img></div> 
            </div>
            </div>
       );
    }
 }
 export default Test6;