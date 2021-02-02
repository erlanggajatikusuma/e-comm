import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Cart, Details, Home } from '../../pages';



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/details">
                    <Details />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;