import logo from './logo.svg';
import './App.css';
import Main from './components/main.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About/About';
import EatingInfo from './components/EatingInfo/EatingInfo';
import TrainingInfo from './components/TrainingInfo/TrainingInfo';
import CompetitionInfo from './components/CompetitionInfo/CompetitionInfo';
import LogUser from './components/Login/LogUser';
import BlogArticles from './components/BlogArticles/BlogArticles';
import Header from './components/Header/Header';
import Navbar from './components/UserFunctionality/layout/Navbar';
import Dashboard from './components/UserFunctionality/dashboard/Dashboard';
import ProgramDetails from './components/UserFunctionality/programs/ProgramDetails';
import SignIn from './components/UserFunctionality/auth/SignIn';
import SignUp from './components/UserFunctionality/auth/SignUp';
import CreateProgram from './components/UserFunctionality/programs/CreateProgram';

function App() {

  return (
    <Router>
        <Header />
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
          <Route path="/login">
            <LogUser />
          </Route>
          <Route path="/blog" >
          <BlogArticles />
            </Route>
    <Route path="/nav"> <Navbar /></Route>
    <Route exact path='/dashboard' component={Dashboard}/>
    <Route path='/program/:id' component={ProgramDetails} />
    <Route path='/signin' component={SignIn} />
    <Route path='/signup' component={SignUp} />
    <Route path='/create' component={CreateProgram} />
      </Switch>
     
    </Router>



  );
}

export default App;
