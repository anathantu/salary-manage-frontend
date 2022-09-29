import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import BasicLayout from "../layouts";

class Router extends React.Component {
    render() {

        return (
            <HashRouter>
                <Switch>
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
