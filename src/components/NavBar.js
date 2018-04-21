import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';

// Components
import SideNav from './SideNav';
import AuthButton from './AuthButton';


function NavBar(props) {

  const authStore = props.authStore;
  const channelStore = props.channelStore;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <a className="navbar-brand" href="index.html">MeBox</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <SideNav authStore={authStore} channelStore={channelStore} />
        <ul className="navbar-nav ml-auto">
          <span className="navbar-text">
            {authStore.currentUser}
          </span>
          <AuthButton authStore={authStore} />
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(NavBar);
