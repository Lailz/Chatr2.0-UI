import React from 'react';
import {observer} from 'mobx-react';


function MessageBox(props) {
  const channelStore = props.channelStore;
  const authStore = props.authStore;
  const messageStore = props.messageStore;
  const channel = props.channel;

  return (
    <div>
      <div className="input-group fixed-bottom">
        <div className="input-group-prepend">
          <button type="button" className="input-group-text btn btn-primary"
                  onClick={(e) =>
                  {messageStore.storeMessage(channel.id, authStore.token)}
                  }>Send</button>
        </div>
        <textarea onChange={ (e) => {messageStore.messageContent = e.target.value}} className="form-control" aria-label="With textarea"></textarea>

      </div>
    </div>
  );
}

export default observer(MessageBox);
