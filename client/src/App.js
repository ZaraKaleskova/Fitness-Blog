import logo from './logo.svg';
import './App.css';
import Main from './components/main.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About/About';
import EatingInfo from './components/EatingInfo/EatingInfo';
import TrainingInfo from './components/TrainingInfo/TrainingInfo';
import CompetitionInfo from './components/CompetitionInfo/CompetitionInfo';

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
          <Route path="/training">
            <TrainingInfo />
          </Route>
          <Route path="/competing">
            <CompetitionInfo />
          </Route>
      </Switch>
     
    </Router>

  );
}

export default App;
