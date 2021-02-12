import React from 'react';
import '../middle-top/middle-top.css';
import Group from '../../asset/images/Group 444.svg';
import Group2 from '../../asset/images/Group 443.svg';
import Group3 from '../../asset/images/Group 442.svg';
import Group4 from '../../asset/images/Group 451.svg';
import Add from '../../asset/images/add-24px.svg';
export default class Middle extends React.Component {
  render() {
    return (
      <div className="middle_top">
        <img src={Group} className="middle_top_img"></img>
        <img src={Group} className="middle_top_img"></img>
        <img src={Group2} className="middle_top_img"></img>
        <img src={Group3} className="middle_top_img"></img>
        <img src={Group4} className="middle_top_img"></img>
        <div className="red_button">
          <img src={Add}></img>
        </div>
      </div>
    );
  }
}
