import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';


// Components
import NavBar from './components/NavBar';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';
import MessagePage from './components/MessagePage';
import MessageBox from './components/MessageBox';
import CreateNewChannelModal from './components/CreateNewChannelModal';

  function App(props) {

    const authStore = props.authStore;
    const channelStore = props.channelStore;


    return (

      <div className="content-wrapper">
        {channelStore.Timer(authStore.token)}
        <NavBar authStore={authStore} channelStore={channelStore} />
        <LogoutModal authStore={authStore}/>
        <LoginModal authStore={authStore}/>
        <SignupModal authStore={authStore}/>
        <Footer />
        <Switch>
          <Route path='/createChannel'
                       render={
                         props => <CreateNewChannelModal {...props}
                           authStore={authStore}
                           channelStore={channelStore}/>
                       } />
          <Route path='/channels/:name'
                        render={
                          props => <MessagePage {...props}
                            authStore={authStore}
                            channelStore={channelStore}
                            /*messageStore={messageStore}*//>
                        } />
        </Switch>
      </div>
    );
  }

export default App;
