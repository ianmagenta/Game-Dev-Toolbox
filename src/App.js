// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { ContextProvider } from "./Context";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
// import PrivateRoute from "./components/PrivateRoute";
import ToolPage from "./components/ToolPage";
import Profile from "./components/Profile";

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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/tools/:id" component={ToolPage} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
