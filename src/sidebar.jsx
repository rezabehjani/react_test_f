// import './img';
import React from 'react';
import './App.css';
import './Style.css';
import Dashbord from './img/dashbord.svg';
import room from './img/rooms.svg';
import device from './img/Smart devices.svg';
import scenario from './img/scenario.svg';
import Timeline from './img/Timeline.svg';
import update from './img/update.svg';
import recordvoice from './img/recordvoice.svg';
import person from './img/person.svg';
import Arrows from './img/a.svg';
import avatar from './img/avatar.svg';
import point from './img/point.svg';



class Sidebar extends React.Component {

  render() {
    return (
      <div>
        <div className="avatar">
          <div className="top-menu">
            <img src={Arrows} className="arrow"></img>
          </div>
          <div className="avat">
            <img src={avatar} ></img>
          </div>
          <div className="name-avatar">
            <p>مجید شفیعی</p>
            <p className="Condition">مالک</p>
          </div>
        </div>

        <div className="menu">
          <div className="anchor">
            <a href="" className="text-link">داشبورد</a>
            <img src={Dashbord} className="image"></img>
          </div>
          <div className="anchor">
            <a href="" className="text-link">اتاق ها</a>
            <img src={room} className="image"></img>
          </div>
          <div className="anchor">
            <a href="" className="text-link">وسایل هوشمند</a>
            <img src={device} className="image"></img>
          </div>
          <div className="anchor">
            <a href="" className="text-link">سناریو</a>
            <img src={scenario} className="image"></img>
          </div>
          <div className="anchor">
            <a href="" className="text-link">نمودار زمانی</a>
            <img src={Timeline} className="image"></img>
          </div>
          <div className="anchor">
            <img src={point} className="point"></img>
            <a href="" className="text-link">به روز رسانی</a>
            <img src={update} className="image"></img>
          </div>
          <div className="anchor">
            <a href="" className="text-link">دستورهای صوتی</a>
            <img src={recordvoice} className="image"></img>
          </div>
          <div className="anchor">
            <a href="" className="text-link">کاربران</a>
            <img src={person} className="image"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;