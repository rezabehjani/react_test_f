import React from 'react';
import '../report/report.css';
import Exp from '../../asset/images/expand-24px.svg';
export default class Report extends React.Component {
  render() {
    return (
      <div className="right_top">
        <div className="right_top_menu">
          <span className="right_top_menu_text1">گزارش عملکرد دستگاه</span>
          <span className="right_top_menu_text2">نمایش همه</span>
        </div>
        <div className="right_top_sub">
          <div className="right_top-text">
            <span>
              <img src={Exp}></img>&nbsp;دستگاه روشن
            </span>
            <span>
              <img src={Exp}></img>&nbsp;دستگاه خاموش
            </span>
            <span>
              <img src={Exp}></img>&nbsp;اجرای سناریو تنظیم شده
            </span>
            <span>
              <img src={Exp}></img>&nbsp;دستگاه روشن شده است
            </span>
          </div>
          <div className="right_top-text2">
            <span>98/2/12 - 20:16</span>
            <span>98/2/12 - 20:16</span>
            <span>98/2/12 - 20:16</span>
            <span>98/2/12 - 20:16</span>
          </div>
        </div>
      </div>
    );
  }
}
