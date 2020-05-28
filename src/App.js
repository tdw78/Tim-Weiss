import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter  } from 'react-router-dom';
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />

      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
      </main>

    </div>
  );
}

export default App;