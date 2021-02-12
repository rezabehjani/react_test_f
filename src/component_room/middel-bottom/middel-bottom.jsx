import React from 'react';
import '../middel-bottom/middle-bottom.css';
import Power from '../../asset/images/power.svg';
import Icon from '../../asset/images/Icon ionic-ios-power.svg';
import Update from '../../asset/images/update.svg';
import Bright from '../../asset/images/Icon material-brightness-auto.svg';
import Timer from '../../asset/images/Icon material-timer.svg';
import Grop from '../../asset/images/Group317.svg';
import Circle from '../../asset/images/Icon awesome-question-circle.svg';
import Line from '../../asset/images/Line 107.svg';
import Delet from '../../asset/images/delete_outline-black-18dp.svg';
import Create from '../../asset/images/create-24px.svg';
export default class Middle_b extends React.Component {
  render() {
    return (
      <div className="middle_bottom">
        <div className="middle_bottom_top">
          <span className="middle_bottom_top_1">کلید دو پل</span>
          <span className="middle_bottom_top_2">
            <button className="btn1">
              <img src={Power} className="btn_img"></img>
            </button>
            <button className="btn2">
              <img src={Icon} className="btn_img"></img>
            </button>
          </span>
        </div>
        <hr className="hr"></hr>
        <div className="middle_bottom_2">
          <button className="button">
            به روز رسانی<img src={Update}></img>
          </button>
          <button className="button">
            روشنایی خودکار<img src={Bright}></img>
          </button>
          <button className="button">
            افزودن زمانبندی<img src={Timer}></img>
          </button>
          <button className="button">
            افزودن به سناریو<img src={Grop}></img>
          </button>
        </div>
        <div className="middle_bottom_3">
          <span>
            <img src={Circle}></img>روشنایی خودکار فعال است
          </span>
          <button className="button2">
            <img src={Line}></img> عملکرد دستگاه به طور خودکار بر اساس ساعات شبانه روز
            <br />
            می باشد.
          </button>
        </div>
        <div className="middle_bottom_4">
          <img src={Delet}></img>
          <img src={Create}></img>
        </div>
      </div>
    );
  }
}
