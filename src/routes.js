import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dictionary from './views/dictionary';
import Essays from './views/essays'
import Spelling from './views/spelling';

export const useRoutes = () => {
    return (
        <Switch>
          <Route path="/essays" exact>
            <Essays />
          </Route>
          <Route path="/dictionary">
            <Dictionary />
          </Route>
          <Route path="/spelling">
            <Spelling />
          </Route>
        </Switch>
    );
}
