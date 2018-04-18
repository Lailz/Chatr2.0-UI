import React from 'react';
import {observer} from 'mobx-react';



function MessageDisplay(props) {
  // console.log(props);

  const messageStore = props.messageStore;
  console.log(messageStore.messages)
  let messages = messageStore.messages.length > 0 && messageStore.messages.map(
    (x) => <div><p>{x.username}</p><br/><p>{x.message}</p></div>
  )
      return (
        <div>
          {messages}
        </div>

        );
      }

export default observer(MessageDisplay);
