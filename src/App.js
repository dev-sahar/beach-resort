import React from 'react';
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";

import HomePage from "./pages/homepage/homepage.component";
import Rooms from "./pages/rooms/rooms.component";
import SingleRoom from "./pages/single-room/single-room.component";
import ErrorPage from "./pages/error/error.component";

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} /> 
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  )
}

export default App;
