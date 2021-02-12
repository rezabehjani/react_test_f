import Dashbord from "./dashbord";
import Room from "./room"
import './App'

export const DefaultRoute = {
    path: "/",
    component: Dashbord,
    exact: true
};

export const SignInRoute = {
    path: "/Room",
    component:Room,
    exact: true
};
const MainRoutes = [
    DefaultRoute,
    SignInRoute
]

export default MainRoutes


