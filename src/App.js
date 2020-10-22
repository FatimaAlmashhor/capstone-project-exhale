/* eslint-disable */
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
   HOME_ROUTE,
   DOCTORS_ROUTE,
   ABOUT_ROUTE,
   CONTACT_ROUTE 
  } from './routes';


function App() {
  // or const [t, i18n] = useTranslation();
  const { t, i18n } = useTranslation();

  function handleLang(lang) {

    i18n.changeLanguage(lang);
  }
  return (
  
 
    
    <div>
       <Router>
    <div>
      <button className='bg-blue mr-10' onClick={() => handleLang('ar')} >Arabic </button>
      <button className='bg-blue-400 mr-10 from-red-800' onClick={() => handleLang('en')}>English </button>
      <h1 className="text-3xl text-red-300">{t('Hello.1')}</h1>
      <p>{t("Learn.1")}</p>
    </div>
 {/* the navbar example start */}
 <div>
   <nav>
     <ul>
       <li>
         <Link to={HOME_ROUTE}>Home</Link>
       </li>
       <li>
         <Link to={DOCTORS_ROUTE}>Doctors</Link>
       </li>
       <li>
         <Link to={ABOUT_ROUTE}>About Us</Link>
       </li>
       <li>
         <Link to={CONTACT_ROUTE}>Contact Us</Link>
       </li>
     </ul>
   </nav>
{/* navbar example end */}
   {/* A <Switch> looks through its children <Route>s and
       renders the first one that matches the current URL. */}
   <Switch>
     <Route path={ABOUT_ROUTE}>
       <About />
     </Route>
     <Route path={CONTACT_ROUTE}>
       <Contact />
     </Route>
     <Route path={DOCTORS_ROUTE}>
       <Doctors />
     </Route>
     <Route path={HOME_ROUTE}>
       <Home />
     </Route>
   </Switch>
 </div>
 
</Router>
</div>
  );
  
      
}
// Componets examples start
function Home() {
  return <h2>Home</h2>;
}
function Doctors() {
  return <h2>Doctors</h2>;
}
function About() {
  return <h2>About us</h2>;
}
function Contact() {
  return <h2>Contact us</h2>;
}
//Componet's examples end
export default App;
