import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import HomePage from './pages/home'
import SchoolPage from './pages/schools'
import StudentsPage from './pages/students'
import LogInPage from './pages/logIn'
import DashBoardPage from './pages/dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row} from 'reactstrap';
import MainNav from './components/navBar/mainNav';
import Footer from './components/footer/footer';

class App extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <Container fluid className="p-0">
      <Router>
        <Switch>
        <Route path="/logIn">
            <LogInPage />
          </Route>
          <Route path="/dashboard">
            <DashBoardPage />
          </Route>
          <Route path="/students">
            <StudentsPage />
          </Route>
          <Route path="/schools">
            <SchoolPage/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  </Container>
    )
  }
}

export default App;
