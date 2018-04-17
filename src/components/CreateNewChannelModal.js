import React from 'react';
import {observer} from 'mobx-react';

// Components
import Modal from './Modal';
import NewChannelForm from './NewChannelForm';

function CreateNewChannelModal(props) {
  const channelStore = props.channelStore;
  const authStore = props.authStore;
  console.log(channelStore);
  const body = <NewChannelForm target="#createnewchannelModal"
                  alternateLinkText="login with an existing account"
                  channelStore={channelStore} />;

  const create = () => {
    const thisModal = window.$('#createnewchannelModal')
    channelStore.storeChannel(authStore.token)
      .then(() => !channelStore.error.length && thisModal.modal('toggle'));
  };

  const modalProps = {
    id: 'createnewchannelModal',
    title: 'Create a New Channel',
    body: body,
    clickHandler: create,
    store: channelStore,
  }
  console.log(modalProps);
  return <Modal {...modalProps} />;
}

export default observer(CreateNewChannelModal);
