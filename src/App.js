
import './App.css';
import './Style.css';
import Test from './test';
import Test2 from './test2';
import Test3 from './test3';
import Test4 from './test4';
function App() {
  return (
    <div className="A">
      <div className="A-top"></div>
      <div className="A-section"> 
        <Test3/>
        <Test2/>
        <Test/>
     </div>
     <div className="A-footer">
       <Test4/>
      </div>
     
    </div>
  );
}

export default App;