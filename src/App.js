import About from "./Components/aboutus";
import Contact from "./Components/contactus";
import News from "./Components/News/news";
import Home from "./Components/home";
import Writeforus from "./Components/writeforus";
import Register from "./Components/Signin-up/Register";
import Login from "./Components/Signin-up/Login";
// import Dashboard from "../Dashboard/src/App";




import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/news">
            <News />
          </Route> 
          <Route exact path="/contact">
            <Contact />
          </Route> 
          <Route exact path="/writeforus">
            <Writeforus />
          </Route> 
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>  
          {/* <Route exact path="/dashboard">
            <Dashboard />
          </Route>  */}
        </Switch> 
    </Router>
    </>
  );
}

export default App;
