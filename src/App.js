import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Aside from "./components/Aside/Aside";
import Admin from "./Pages/Admin/Admin";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Profile from "./Pages/Profile/Profile";
import Preloader from "./components/Preloader/Preloader";
import Blogs from "./Pages/Blogs/Blogs";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import Login from "./Login/Login/Login";

window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});

function App() {
  return (
    <Router>
      <Aside></Aside>
      <Preloader></Preloader>
      <Switch>
        <PrivateRoute exact path="/">
          <Home></Home>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/about">
          <Admin></Admin>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/service">
          <Services></Services>
        </Route>
        <Route path="/blog">
          <Blogs></Blogs>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
