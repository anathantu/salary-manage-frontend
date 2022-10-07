import React from "react";
import { HashRouter, Route, Switch,Redirect } from "react-router-dom";
import BasicLayout from "../layouts";

class Router extends React.Component {
    render() {

        return (
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/form" />
                    <Route
                        path="/"
                        component={BasicLayout}
                    />
                </Switch>
            </HashRouter>
        );
    }
}

export default Router;
