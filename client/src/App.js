import logo from './logo.svg';
import './App.css';
import Main from './components/main.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About/About';
import EatingInfo from './components/EatingInfo/EatingInfo';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/nutrition">
            <EatingInfo />
          </Route>
      </Switch>
     
    </Router>

  );
}

export default App;
