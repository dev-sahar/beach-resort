import React, { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import ErrorPage from "./pages/error/error.component";

import './App.css';

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const Rooms = lazy(() => import("./pages/rooms/rooms.component"));
const SingleRoom = lazy(() => import("./pages/single-room/single-room.component"));

const App = () => {
  return (
    <div>
      <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/rooms" component={Rooms} />
              <Route exact path="/rooms/:slug" component={SingleRoom} />
              <Route path="" component={ErrorPage} />
            </Switch>
          </Suspense>
        </ErrorBoundary> 
    </div>
  )
}

export default App;
