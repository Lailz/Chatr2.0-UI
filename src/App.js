import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';


// Components
import NavBar from './components/NavBar';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';

function App(props) {
  const authStore = props.authStore;
  const channelStore = props.channelStore;
  return (



    <div className="content-wrapper">
      <NavBar authStore={authStore} channelStore={channelStore}/>
      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal authStore={authStore}/>
      <Footer />
      <Switch>
        <Route path='/createChannel' channelStore={channelStore} />
        <Route path='/channels/:name' />
      </Switch>
    </div>



  );
}

export default App;
