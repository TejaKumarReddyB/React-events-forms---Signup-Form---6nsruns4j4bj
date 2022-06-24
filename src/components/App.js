import './styles/App.css';
import React from 'react';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signin/" component={SignIn} />
      <Route path="/signup/" component={SignUp} />
    </Switch>
  );
}

export default App;
