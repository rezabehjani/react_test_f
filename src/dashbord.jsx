import "./dashbord.css";
import Test from "./components/test/test";
import Test2 from "./components/test2/test2";
import Test3 from "./components/test3/test3";
import Test4 from "./components/test4/test4";
import Test5 from "./components/test5/test5";
import Test6 from "./components/test6/test6";
import Test7 from "./components/test7/test7";
import Chart from "./components/chart/chart";
import Map from "./components/map/map";
function Dashbord() {
  return (
    <div>
      <div className="rightt">
        <div className="Mid">
          <Test5 />
          <Map />
          <Test7 />
          <Test6 />
        </div>
        <div className="A-top">
          <div className="A-top-chart">
            <div className="chartt">
              <Chart />
            </div>
          </div>
          <div className="A-section">
            <Test3 />
            <Test2 />
            <Test />
          </div>
          <div className="A-footer">
            <Test4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
