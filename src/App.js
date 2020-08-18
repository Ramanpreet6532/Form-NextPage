import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"

function App() {
  return (
    <div className="App">
       <div className="container">
          <Router>
             <nav>
               <ul>
                 <li><a href="pages/Home.js">HOME</a></li>
                 <li a href="#">SIGNUP</li>
                 <li a href="#">LOGIN</li>
               </ul>

             </nav>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Signup">
             <SignUp />
          </Route>
          <Route exact path="/Login">
             <Login />
          </Route>
          </Router>
       </div>

      
    </div>
  );
}

export default App;
