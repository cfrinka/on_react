import React from 'react';

import Landing from './components/landing';
import Login from './components/login';
import RegPatient from './components/regpatient';
import RegProfessional from './components/regprofessional'
import Register from './components/register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (

    <Router>
      <div className="App">
        
        <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/regpatient" component={RegPatient} />
        <Route path="/regprofessional" component={RegProfessional} />
        </Switch>
      </div>
    </Router>
  )
}

export default App