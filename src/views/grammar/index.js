import { Navigation } from "../../components";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Vocabulary from './Vocabulary'
import GamesNavigator from "./Games";
import Reading from "./Reading";
import Rules from "./Rules";
import Guess from './Games/Guess'

export default function Grammar(){

    return (
      <BrowserRouter>
        <Navigation
          className="mx-auto mt-5"
          links={[
            { text: "Rules", to: "/Grammar/Rules" },
            { text: "Reading", to: "/Grammar/Reading" },
            { text: "Games", to: "/Grammar/Games" },
            { text: "Vocabulary", to: "/Grammar/Vocabulary" },
          ]}
        />
        <Switch>
          <Route path="/Grammar/Games" exact>
            <GamesNavigator />
          </Route>
          <Route path="/Grammar/Reading">
            <Reading />
          </Route>
          <Route path="/Grammar/Rules">
            <Rules />
          </Route>
          <Route path="/Grammar/Vocabulary">
            <Vocabulary />
          </Route>
          <Route path="/Grammar/Games/Guess">
            <Guess />
          </Route>
        </Switch>
      </BrowserRouter>
    );
}
