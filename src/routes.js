import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Character from './pages/Character';
import Characters from './pages/Characters';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Characters} />
                <Route path="/character" component={Character} />
            </Switch>
        </BrowserRouter>
    );
}
