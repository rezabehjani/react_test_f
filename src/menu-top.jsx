import React from 'react';
import './App.css';
import './Style.css';
import Peson from './img/Icon material-person.svg';
import Setting from './img/Icon ionic-md-settings.svg';
import Bell from './img/Icon feather-bell.svg';
import M from './img/menu.png';

class Menu extends React.Component {
   constructor(props){
      super(props);
     
   }
    render() {
       
       return (
          <div className="icon_menu">
              <img src={Peson}></img>
              <img src={Setting}></img>
              <img src={Bell}></img>
              <img src={M} id="menu-responsiv"></img>
         </div>
       );
    }
 }
 export default Menu;