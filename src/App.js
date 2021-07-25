import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Conatct';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
         <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={Signup} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
