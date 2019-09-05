import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './component/home';
import Artist from './component/artists';

const Routes = () => {
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/artist/:id" exact component={Artist}/>
            </Switch>
        )
}

export default Routes;