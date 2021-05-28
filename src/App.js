import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Aside from "./components/Aside/Aside";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import Preloader from "./components/Preloader/Preloader";
import Blogs from "./Pages/Blogs/Blogs";
import JobPosting from "./Pages/About/Job-Posting";

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
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <JobPosting></JobPosting>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
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
