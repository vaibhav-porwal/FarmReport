import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Conatct';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Reportloss from './components/Pages/FromReport';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Services from './components/Pages/Services';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services}/>
         <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/form' component={Reportloss}/>
      </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
