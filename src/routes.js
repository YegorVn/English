import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Grammar from './views/grammar';
import Essays from './views/essays'
import Pronounce from './views/pronounce';

export const useRoutes = () => {
    return (
        <Switch>
          <Route path="/Essays" exact>
            <Essays />
          </Route>
          <Route path="/Grammar">
            <Grammar />
          </Route>
          <Route path="/Pronounce">
            <Pronounce />
          </Route>
        </Switch>
    );
}
