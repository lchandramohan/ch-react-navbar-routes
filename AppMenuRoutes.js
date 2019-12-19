import React, {Component} from "react";
import {  Switch, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent.js";
import ServicesComponent from "./components/ServicesComponent.js";
import AboutUsComponent from "./components/AboutUsComponent.js";
import ContactUsComponent from "./components/ContactUsComponent.js";

class AppMenuRoutes extends Component{

render(){
  return(
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    <Route exact path="/services" component={ServicesComponent} />
    <Route exact path="/about" component={AboutUsComponent} />
    <Route exact path="/contactus" component={ContactUsComponent} />
  </Switch>

  );
}
}
export default AppMenuRoutes;
