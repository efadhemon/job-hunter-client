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
import JobPosting from "./Pages/JobPosting/JobPosting";

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
        <PrivateRoute path="/post-jobs">
          <JobPosting></JobPosting>
        </PrivateRoute>
        <PrivateRoute path="/about">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile></Profile>
        </PrivateRoute>
        <PrivateRoute path="/service">
          <Services></Services>
        </PrivateRoute>
        <PrivateRoute path="/blog">
          <Blogs></Blogs>
        </PrivateRoute>
        <PrivateRoute path="/contact">
          <Contact></Contact>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
