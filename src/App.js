import React from "react";
import { HashRouter , Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Skills" component={Skills} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
