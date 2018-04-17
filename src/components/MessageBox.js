import React from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';


// Fontawesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';

// Components
import AuthButton from './AuthButton';


function MessageBox(props) {

  return (
<div>

    <div className="input-group fixed-bottom">
    <div className="input-group-prepend">
     
    <button type="button" className="input-group-text btn btn-primary">Send</button>
    
    </div>
    <textarea className="form-control" aria-label="With textarea"></textarea>
    </div>
        </div>

    
  );
}

export default observer(MessageBox);



