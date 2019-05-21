import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from "./routes/About/about";
import Contact from "./routes/Contact/contact";
import Home from "./routes/Home/home";
import Navbar from "./components/Navbar/navbar";
function App() {
  return (
      <Router>
    <Navbar/>
    <div className="App">
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/" exact component={Home}></Route>
    </div>
      </Router>
  );
}

export default App;
