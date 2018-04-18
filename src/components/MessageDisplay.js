import React from 'react';
import {observer} from 'mobx-react';



function MessageDisplay(props) {
  console.log(props);

  const messageStore = props.messageStore;
  let messages = messageStore.messages.map(
    (x) => <p>{x.message}</p>
  )
      return (
        <div>
          {messages}
        </div>

        );
      }

export default observer(MessageDisplay);
