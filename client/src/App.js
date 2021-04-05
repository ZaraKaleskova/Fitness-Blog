import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import EatingInfo from "./components/EatingInfo/EatingInfo";
import TrainingInfo from "./components/TrainingInfo/TrainingInfo";
import CompetitionInfo from "./components/CompetitionInfo/CompetitionInfo";
import Navbar from "./components/UserFunctionality/layout/Navbar";
import Dashboard from "./components/UserFunctionality/dashboard/Dashboard";
import ProgramDetails from "./components/UserFunctionality/programs/ProgramDetails";
import SignIn from "./components/UserFunctionality/auth/SignIn";
import SignUp from "./components/UserFunctionality/auth/SignUp";
import CreateProgram from "./components/UserFunctionality/programs/CreateProgram";
import Articles from './components/Articles/Articles';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
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
        <Route path="/articles" component={Articles} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/program/:id" component={ProgramDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateProgram} />
      </Switch>
    </Router>
  );
}

export default App;
