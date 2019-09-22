import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux'

import {setCurrent} from '../actions/logs'

const LogItem = (props) => {
  const { message, attention, id, technician, date } = props.log
  const {setCurrent} = props
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          onClick={() => setCurrent(id)}
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
        >
          {message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{id} </span>
          last updated by <span className='black-text'>{technician}{' '}</span>
          on <Moment format='MMMM Do YYYY,h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default connect(null,{setCurrent})(LogItem);
