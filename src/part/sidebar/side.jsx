import React from "react";
import "../sidebar/side.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../route'
import '../../index'
import Avatar from "@material-ui/core/Avatar";
import Arrow_right  from '../../asset/images/icons/arrow_right.svg';
import avatar from '../../asset/images/icons/avatar.svg';
import Dashbord from '../../asset/images/icons/dashbord.svg';
import room from '../../asset/images/icons/rooms.svg';
import device from '../../asset/images/icons/Smart devices.svg';
import scenario from '../../asset/images/icons/scenario.svg';
import Timeline from '../../asset/images/icons/Timeline.svg';
import update from '../../asset/images/icons/update.svg';
import recordvoice from '../../asset/images/icons/recordvoice.svg';
import person from '../../asset/images/icons/person.svg';
import Arrows from '../../asset/images/icons/a.svg';
import point from '../../asset/images/icons/point.svg';


export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn,
        }));
    }
    render() {
        return (
            <div className="area">
                <nav
                    className={
                        this.state.isToggleOn ? "main-menu item " : "main-menu item  active"
                    }
                >
                    <div className=" avatarr">
                        <div className="d-flex justify-content-end">
                            <img src={Arrow_right}
                                onClick={this.handleClick}
                                className={this.state.isToggleOn ? " rotate " : ""}
                            ></img>
                        </div>
                        <div className="avatar"><Avatar
                            alt="Remy Sharp"
                            src={avatar} 
                            style={{
                              margin:"5px",
                              width:"50px",
                              height:"50px"
                              
                            } }      
                        />
                        </div>
                        <div className="avater-name">
                            <span className=" item name">
                                {" "}
                                {sessionStorage.getItem("UserName")}
                            </span>
                            <div className="name-avatar">
            <p>مجید شفیعی</p>
            <p className="Condition">مالک</p>
                   </div>             
                     </div>
                    </div>
         <div className="menu">
         <Link to="/">
          <div className="anchor">
            <a href="" className="text-link">داشبورد</a>
            <img src={Dashbord} className="image"></img>
          </div>
          </Link>
          <Link to="/Room">
          <div className="anchor">
            <a href="" className="text-link">اتاق ها</a>
            <img src={room} className="image"></img>
          </div>
          </Link>
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
                    
                </nav>

            </div>
        )
    }
}