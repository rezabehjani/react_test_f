import React from 'react';
import '../menu-top/menu-top.css';
import Peson from '../../asset/images/icons/Icon material-person.svg';
import Setting from '../../asset/images/icons/Icon ionic-md-settings.svg';
import Bell from '../../asset/images/icons/Icon feather-bell.svg';
import M from '../../asset/images/icons/menu.png';

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