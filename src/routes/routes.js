import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { UserIsAuthenticated } from '../util/wrappers.js'
import pages from "./pages";

// Layouts
import Home from "../app/home/Home.js";
import App from '../app/app/App.js'


// Must construct an object out of render() function for
// both performance and the correctness of module states, i.e. this.state.

export default () => (
    <Switch>
        <App>
            <Route exact path="/" component={Home} />

            {/* Import all routes, permissions are verified in each route */}
            {pages
                .filter(page => page.route)
                .map(page => (
                    <Route
                        key={page.constants.NAME}
                        path={`/${page.constants.NAME}`}
                        component={UserIsAuthenticated(page.route)}
                    />
                ))}
            <Redirect to="/" />
            </App>
		</Switch>
        );