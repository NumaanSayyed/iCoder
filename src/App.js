// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import Navbar  from './custom_components/Navbar';
// import Carousel from './custom_components/Carousel';
import Footer from './custom_components/Footer';
// import Card from './custom_components/Card'
// import Thumb from './custom_components/Thumb';
import AboutUs from './views/AboutUs';
import Contact from './views/Contact';
import Home from './views/Home'

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
           
           
                  <Router>
                    <Navbar title="iCoder"/>
                    <Routes>
                    <Route path='/' element={<Home/>}> 
                      </Route>
                      <Route path='/about' element={<AboutUs/>}> 
                      </Route>
                      <Route path='/contact' element={<Contact/>}> 
                      </Route>
                    </Routes>
                       

 <div className="container my-1">
 <Footer/>
 </div>
                  </Router>

   );
  }
}

// function App() {
//   return (
//     <>
  
//     <Navbar title="iCoder"/>
//     <Carousel/>
//     <Card/>
//     <Thumb/>
//     <Footer/>
//        <AboutUs/>
 
//     </>
//   );
// }

export default App;
