import React from "react";
import ReactDOM from "react-dom";
import MainRoutes from "./route";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HighlightOff } from "@material-ui/icons";
import Sidebar from "./part/sidebar/side";
import Menu from './part/menu-top/menu-top';
import "./room.css";

const CloseButton = ({ closeToast }) => (
  <i className="material-icons" onClick={closeToast}>
    <HighlightOff />
  </i>
);
class Ap extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="A">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="menutop">
          <Menu />
        </div>

        {MainRoutes.map((route) => (
          <Route
            exact={route.exact}
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <App/> */}
      <Ap />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
