import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Mens from "./components/Mens";
import Navbar from "./components/Navbar";
import Womens from "./components/Womens";

const App = () => {
  return (
    <div className="App overflow-hidden relative min-h-screen pb-60">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mens" component={Mens} />
          <Route path="/womens" component={Womens} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
