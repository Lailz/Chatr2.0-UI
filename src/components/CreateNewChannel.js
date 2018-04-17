import React from 'react';
import {observer} from 'mobx-react';

// Components
import Modal from './Modal';
import NewChannelForm from './NewChannelForm';

function CreateNewChannel(props) {
  const channelStore = props.channelStore;
  const body = <RegistationForm target="#loginModal"
                  alternateLinkText="login with an existing account"
                  authStore={authStore} />;

  const signup = () => {
    const thisModal = window.$('#signupModal')
    authStore.signup()
      .then(() => !authStore.error.length && thisModal.modal('toggle'));
  };

  const modalProps = {
    id: 'createNewChannelModal',
    title: 'Create a New Channel',
    body: body,
    clickHandler: signup,
    store: channelStore,
    type: 'Signup'
  }
  return <Modal {...modalProps} />;
}

export default observer(CreateNewChannel);
