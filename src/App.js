// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { ContextProvider } from "./Context";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./utils/history";
// import PrivateRoute from "./components/PrivateRoute";
import ToolPage from "./components/ToolPage";
import Profile from "./components/Profile";
import Bubbles from "./components/Bubbles";
import UnderConstruction from "./components/UnderConstruction";
import FourOhFour from "./components/FourOhFour";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        {/* Don't forget to include the history module */}
        <Router history={history}>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/" history={history} component={Bubbles} />
            <Route exact path="/tools/:id" history={history} component={ToolPage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/explore" component={UnderConstruction} />
            <Route exact path="/projects" component={UnderConstruction} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/info" component={UnderConstruction} />
            <Route exact path="/404" component={FourOhFour} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
