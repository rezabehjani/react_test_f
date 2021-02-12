import React from 'react';
import '../left/left.css';
import Right from '../../asset/images/chevron_right-244px.svg';
import Right2 from '../../asset/images/chevron_right-24px.svg';
import Armchair from '../../asset/images/armchair.svg';
import Chef from '../../asset/images/chef.svg';
import Shape from '../../asset/images/Shape.svg';
import Bed from '../../asset/images/bed.svg';
export default class Left extends React.Component {
  render() {
    return (
      <div className="left">
        <button>
          <img src={Right}></img>هال و پذیرایی<img src={Armchair}></img>
        </button>
        <button>
          <img src={Right2}></img>آشپزخانه<img src={Chef}></img>
        </button>
        <button>
          <img src={Right2}></img>اتاق خواب<img src={Shape}></img>
        </button>
        <button>
          <img src={Right2}></img>پارکینگ<img src={Bed}></img>
        </button>
      </div>
    );
  }
}
