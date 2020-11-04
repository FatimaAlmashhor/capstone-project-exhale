import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect ,useLocation} from 'react-router-dom';
import {
  HOME_ROUTE,
  DOCTORS_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  SELF_ASSESSMENT_ROUTE,
  ARTICLES_BASE_ROUTE,
  ARTICLE_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  NOT_FOUND_ROUTE,
} from './routes';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Doctors from './containers/Doctors';
import Articles from './containers/Articles';
import Article from './containers/Articles/Article';
import Contact from './containers/Contact';
import About from './containers/About';
import SelfAssessment from './containers/SelfAssessment';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Modal from './components/common/Modal';
function App() {
  
  return (
    <Router>
      <Navbar />
      <Routing />
    </Router>
  );
}
export default App;

export const Routing = () => {
  let location = useLocation();
  // console.log(location);
  let modal = location.state && location.state.modal;
  console.log(modal);
  return (
    <div>
      <Switch location={modal || location}>
        <Route path={LOGIN_ROUTE} component={Login} />
        <Route path={DOCTORS_ROUTE} component={Doctors} />
        <Route path={ARTICLE_ROUTE} component={Article} />
        <Route path={ARTICLES_BASE_ROUTE} component={Articles} />
        <Route path={CONTACT_ROUTE} component={Contact} />
        <Route path={ABOUT_ROUTE} component={About} />
        <Route path={SELF_ASSESSMENT_ROUTE} component={SelfAssessment} />
        <Route path={NOT_FOUND_ROUTE} component={NotFound} />
        <Route exact path={HOME_ROUTE} component={Home} />
        <Redirect to={NOT_FOUND_ROUTE} />
      </Switch>
      {modal && <Route path='/:id' children={<Modal />} />}
    </div>
  );
}