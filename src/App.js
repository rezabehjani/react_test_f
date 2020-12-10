
import './App.css';
import './Style.css';
import Test from './test';
import Test2 from './test2';
import Test3 from './test3';
import Test4 from './test4';
import Test5 from './test5';
import Test6 from './test6';
import Test7 from './test7';
import Sidebar from './sidebar';
import Chart from './chart';
import Map from './map';
import Menu from './menu-top';
function App() {
  return (
    <div className="A">
      <div className="cover"></div>
      <div className="sidebar"><Sidebar/></div>
      <div className="menutop"><Menu/></div>
      <div className="right">
      <div className="Mid">
        <Test5/>
        <Map/>
        <Test7/>
        <Test6/>
      </div>
      <div className="A-top">
        <div className="A-top-chart"><div className="chart"><Chart/></div></div>
      <div className="A-section"> 
        <Test3/>
        <Test2/>
        <Test/>
     </div>
     <div className="A-footer">
       <Test4/>
      </div>
      </div>
    </div>
      </div>

  );
}

export default App;