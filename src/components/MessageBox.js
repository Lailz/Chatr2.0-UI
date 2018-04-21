import React from 'react';
import {observer} from 'mobx-react';


function MessageBox(props) {
  const channelStore = props.channelStore;
  const authStore = props.authStore;
  const channel = props.channel;

  return (
    <div>
      <div className="input-group">
        <div className="input-group-append">
          <button type="button" className="input-group-text btn btn-primary"
                  onClick={(e) =>
                  {channelStore.storeMessage(channel.id, authStore.token)}
                  }>Send</button>
        </div>
        <textarea onChange={ (e) => {channelStore.messageContent = e.target.value}} className="form-control" aria-label="With textarea"></textarea>

      </div>
    </div>
  );
}

export default observer(MessageBox);
