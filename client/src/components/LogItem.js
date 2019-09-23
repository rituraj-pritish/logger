import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { setCurrent, deleteLog } from '../actions/logs';

const LogItem = props => {
  const { message, attention, _id, technician, date } = props.log;
  const { setCurrent, deleteLog } = props;
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          onClick={() => setCurrent(_id)}
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
        >
          {message}
        </a>
        <br />
        <span className='grey-text'>
          last updated by <span className='black-text'>{technician} </span>
          on <Moment format='MMMM Do YYYY,h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' className='secondary-content '>
          <i
            className='material-icons grey-text'
            onClick={() => deleteLog(_id)}
          >
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default connect(
  null,
  { setCurrent, deleteLog }
)(LogItem);
