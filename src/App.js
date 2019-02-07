import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import "./App.css";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";
import About from './components/pages/About';
import NotFound from "./components/pages/NotFound";
import Test from './components/test/Test';
import EditContact from './components/contacts/EditContact';



class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route exact path="/contact/edit/:id" component={EditContact}></Route>
              <Route exact path="/test" component={Test}></Route>
              <Route component={NotFound}></Route>
            </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
