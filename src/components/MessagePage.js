import React from 'react';
import {observer} from 'mobx-react';

import MessageBox from './MessageBox'
import MessageDisplay from './MessageDisplay'

function MessagePage(props) {

  const authStore = props.authStore;
  const channelStore = props.channelStore;
  const messageStore = props.messageStore;
  const channel = channelStore.getChannelByName(props.match.params.name);

    return (
      
      <div>
        <MessageDisplay authStore={authStore}
                        channelStore={channelStore}
                        messageStore={messageStore}
                        channel={channel}/>

        <MessageBox authStore={authStore}
                    channelStore={channelStore}
                    messageStore={messageStore}
                    channel={channel}/>
      </div>

    );
  }

  export default observer(MessagePage);
