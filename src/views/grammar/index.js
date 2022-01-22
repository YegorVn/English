import { useEffect, useState } from "react";
import { Input, Label, Button, Row, Col } from "reactstrap";
import { Textarea, CustomInput, Navigation } from "../../components";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Words from './Words'
import Spelling from "./Spelling";

export default function Grammar(){

    return (
      <BrowserRouter>
        <Navigation
          className="mx-auto mt-5"
          links={[
            { text: "Punctuation", to: "/Grammar/Punctuation" },
            { text: "Punctuation", to: "/Grammar/Punctuation" },
            { text: "spelling", to: "/Grammar/Spelling" },
            { text: "Words", to: "/Grammar/Words" },
          ]}
        />
        <Switch>
          <Route path="/Grammar/Spelling" exact>
            <Spelling />
          </Route>
          <Route path="/Grammar/Vocabulary">
            <Words />
          </Route>
          <Route path="/Games/:name?">
          </Route>
        </Switch>
      </BrowserRouter>
    );
}
