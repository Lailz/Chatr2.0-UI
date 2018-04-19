import React from 'react';
import {observer} from 'mobx-react';



function MessageDisplay(props) {
  // console.log(props);

  const messageStore = props.messageStore;
  console.log(messageStore.messages)
  let messages = messageStore.messages.length > 0 && messageStore.messages.map(
    (x) => <div class="card">
      <div class="card-body"><p>{x.username}</p><p>{x.message}</p><p>{x.timestamp}</p></div></div>
  )
      return (
        <div>
            {messages}
        </div>
        );
      }

export default observer(MessageDisplay);
