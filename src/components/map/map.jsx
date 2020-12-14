import React from 'react';
import '../map/map.css';
import Map from '../../asset/images/icons/map.svg';

class Test5 extends React.Component {
   constructor(props){
      super(props);
     
   }
    render() {
       
       return (
          <div className="map" >
           <img src={Map} className="img-map"></img>
         
          </div>
       );
    }
 }
 export default Test5;