import React, { useEffect } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import Navigation from './Navigation';
import './App.css'


function App() {

  const routes = useRoutes()
    return (
      <>
        <Router>
          <div>
          <Navigation />
          </div>
          {routes}
        </Router>
      </>
      );
    }


export default App;