import React from 'react';
import {observer} from 'mobx-react';

import MessageBox from './MessageBox'
import MessageDisplay from './MessageDisplay'

function MessagePage(props) {

  const authStore = props.authStore;
  const channelStore = props.channelStore;
  const channel = channelStore.getChannelByName(props.match.params.name);

  let messages = channelStore.messages.length > 0 && channelStore.messages.map(
    (x) =>
    <div class="card">
      <div class="card-body">
        <h5>{x.username}</h5>
        <h8>{x.timestamp}</h8>
        <p>{x.message}</p>
      </div>
    </div>);

  return (
    <div>

      {messages}

      <MessageBox authStore={authStore}
                  channelStore={channelStore}
                  channel={channel}/>

    </div>

  );
}

  export default observer(MessagePage);
