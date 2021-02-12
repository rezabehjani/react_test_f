import React from "react";
import "../menu-top/menu-top.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../route'
import '../../index'
import Peson from "../../asset/images/icons/Icon material-person.svg";
import Setting from "../../asset/images/icons/Icon ionic-md-settings.svg";
import Bell from "../../asset/images/icons/Icon feather-bell.svg";
import M from "../../asset/images/icons/menu.png";
import Collapse from "@material-ui/core/Collapse";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    return (
      <div>
        <div className="icon_menu">
          <img src={Peson}></img>
          <img src={Setting}></img>
          <img src={Bell}></img>
          <img
            src={M}
            id="menu-responsiv"
            onClick={(e) => this.handleToggle(e)}
          ></img>
        </div>
        <Collapse in={this.state.isExpanded} className="menuclapse">
          <div className="menu">
            <Link to="/">
            <div className="anchor">
              <a href="" className="text-link">
                داشبورد
              </a>
            </div>
            </Link>
            <Link to="/Room">
            <div className="anchor">
              <a href="" className="text-link">
                اتاق ها
              </a>
            </div>
            </Link>
            <div className="anchor">
              <a href="" className="text-link">
                وسایل هوشمند
              </a>
            </div>
            <div className="anchor">
              <a href="" className="text-link">
                سناریو
              </a>
            </div>
            <div className="anchor">
              <a href="" className="text-link">
                نمودار زمانی
              </a>
            </div>
            <div className="anchor">
              <a href="" className="text-link">
                به روز رسانی
              </a>
            </div>
            <div className="anchor">
              <a href="" className="text-link">
                دستورهای صوتی
              </a>
            </div>
            <div className="anchor">
              <a href="" className="text-link">
                کاربران
              </a>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}
export default Menu;
