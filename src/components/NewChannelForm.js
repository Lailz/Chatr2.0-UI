import React from 'react';
import {observer} from 'mobx-react';

function NewChannelForm(props) {

  const channelStore = props.channelStore;
  
  return (
    <div>
      <form>
        {channelStore.error.length > 0 && (
          <div className="alert alert-danger" role="alert">{channelStore.error}</div>
        )}
        <div className="form-group">
          <input className="form-control"
            type="text"
            placeholder="Channel Name"
            value={channelStore.channelName}
            required
            onChange={(e) => {
              channelStore.channelName = e.target.value;
              channelStore.error = [];
            }}/>
        </div>
      </form>
    </div>
  );
}

export default observer(NewChannelForm);
