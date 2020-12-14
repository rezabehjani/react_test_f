// import './img';
import React from 'react';
import '../sidebar/sidebar.css';
import Dashbord from '../../asset/images/icons/dashbord.svg';
import room from '../../asset/images/icons/rooms.svg';
import device from '../../asset/images/icons/Smart devices.svg';
import scenario from '../../asset/images/icons/scenario.svg';
import Timeline from '../../asset/images/icons/Timeline.svg';
import update from '../../asset/images/icons/update.svg';
import recordvoice from '../../asset/images/icons/recordvoice.svg';
import person from '../../asset/images/icons/person.svg';
import Arrows from '../../asset/images/icons/a.svg';
import avatar from '../../asset/images/icons/avatar.svg';
import point from '../../asset/images/icons/point.svg';



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