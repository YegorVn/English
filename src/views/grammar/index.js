import { Navigation } from "../../components";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Vocabulary from './Vocabulary'
import Spelling from "./Spelling";
import Reading from "./Reading";
import Rules from "./Rules";


export default function Grammar(){

    return (
      <BrowserRouter>
        <Navigation
          className="mx-auto mt-5"
          links={[
            { text: "Rules", to: "/Grammar/Rules" },
            { text: "Reading", to: "/Grammar/Reading" },
            { text: "spelling", to: "/Grammar/Spelling" },
            { text: "Vocabulary", to: "/Grammar/Vocabulary" },
          ]}
        />
        <Switch>
          <Route path="/Grammar/Spelling" exact>
            <Spelling />
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
          <Route path="/Games/:name?">
          </Route>
        </Switch>
      </BrowserRouter>
    );
}
