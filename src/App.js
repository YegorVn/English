import React, { useEffect } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {Navbar} from './components';
import './styles/App.scss'
import './styles/Font.scss'
import './styles/OverWritten.scss'


function App() {

  const routes = useRoutes()
    return (
      <>
        <Router>
          <div>
          <Navbar />
          </div>
          {routes}
        </Router>
      </>
      );
    }


export default App;