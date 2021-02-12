import './room.css';
import Navbar from './component_room/navbar/navbar';
import Report from './component_room/report/report';
import Chart from './component_room/chartR/chart';
import Middle from './component_room/middle-top/middle-top';
import Middle_b from './component_room/middel-bottom/middel-bottom';
import Left from './component_room/left/left';

function Room() {
  return (
   
      <div>
        
        <div>
          <Navbar />
        </div>
        <article>
          <div className="right">
            <Report />
            <Chart />
          </div>
          <div className="middle">
            <Middle />
            <Middle_b />
          </div>
          <div>
            <Left />
          </div>
        </article>
      </div>
  
  );
}

export default Room;
