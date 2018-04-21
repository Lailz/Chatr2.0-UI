import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer} from 'mobx-react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHashtag from '@fortawesome/fontawesome-free-solid/faHashtag'

function ChannelNavLink(props) {

  let channel = props.channel;
  let authStore = props.authStore;
  let channelStore = props.channelStore;

  return (
    <li onClick={() => channelStore.fetchMessages(channel.id, authStore.token)} className="nav-item" data-toggle="tooltip" data-placement="right" title={channel.name}>
      <NavLink className="nav-link" to={`/channels/${channel.name}`}>
        <FontAwesomeIcon icon={faHashtag} />
        <span className="nav-link-text"> {channel.name}</span>
      </NavLink>
    </li>
  );
}

export default observer(ChannelNavLink);
