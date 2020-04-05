import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import cadastro from './Pages/cadastro';
import lista from './Pages/lista';
import mapa from './Pages/mapa';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={cadastro} />
                <Route path="/lista" component={lista} />
                <Route path="/mapa" component={mapa} />
            </Switch>
        </BrowserRouter>
    )
}