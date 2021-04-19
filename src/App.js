import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext, useState } from 'react';
import Project from './components/Project/Project';
import Review from './components/Review/Review';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
               
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/About Us">
            <AboutUs/>
          </Route>
          <Route path="/Project">
            <Project></Project>
          </Route>
          <Route path="/Reviews">
            <Review/>
          </Route>
          <Route exact path="/Admin">
            <Admin/>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/ride/:rideType">
            
          </PrivateRoute>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
