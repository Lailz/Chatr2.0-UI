import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer} from 'mobx-react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHashtag from '@fortawesome/fontawesome-free-solid/faHashtag'
//import observer from 'mobx-react';

function ChannelNavLink(props) {


  return (
    <li onClick={() => setInterval(
        () => props.messageStore.fetchMessages(props.channel.id, props.authStore.token),
        3000
    ) } className="nav-item" data-toggle="tooltip" data-placement="right" title={props.channel.name}>
      <NavLink className="nav-link" to={`/channels/${props.channel.name}`}>
        <FontAwesomeIcon icon={faHashtag} />
        <span className="nav-link-text"> {props.channel.name}</span>
      </NavLink>
    </li>
  );
}


export default observer(ChannelNavLink);
