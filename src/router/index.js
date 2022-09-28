import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import SalaryForm from "../views/SalaryForm/SalaryForm";
import BasicLayout from "../layouts";
import UserList from "../views/UserList";

class Router extends React.Component {
    render() {

        return (
            <HashRouter>
                <Switch>

                    <Route
                        path="/layout"
                        component={BasicLayout}
                    />
                    <Route
                        path="/form"
                        component={SalaryForm}
                    />
                     <Route
                        path="/userList"
                        component={UserList}
                    />
                </Switch>
            </HashRouter>
        );
    }
}

export default Router;
