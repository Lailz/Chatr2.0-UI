import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';


// Components
import NavBar from './components/NavBar';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';
import MessageBox from './components/MessageBox';
import CreateNewChannelModal from './components/CreateNewChannelModal';

function App(props) {
  const authStore = props.authStore;
  const channelStore = props.channelStore;
  const messageStore = props.messageStore;
  return (

    <div className="content-wrapper">
      <NavBar authStore={authStore} channelStore={channelStore}/>
      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal authStore={authStore}/>
      <MessageBox messageStore={messageStore}/>
      <Footer />
      <Switch>
        <Route path='/createChannel'
                     render={
                       props => <CreateNewChannelModal {...props} authStore={authStore} channelStore={channelStore}/>
                     } />
        <Route path='/channels/:name' />

      </Switch>
    </div>

  );
}

export default App;
