import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min.js';
import {updateLog, clearCurrent} from '../actions/logs'

const EditLogModal = ({ currentLog, techs,loading,updateLog,clearCurrent }) => {
  const [data, setData] = useState({
    message: '',
    technician: ''
  });
  const [attention, setAttention] = useState(true);
  const { message, technician } = data;

  //setting current log
  useEffect(() => {
    if (currentLog !== null) {
      setData({
        message: currentLog.message,
        technician: currentLog.technician
      });
      setAttention(currentLog.attention);
    }
  }, [currentLog]);

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (message === '' || technician === '') {
      M.toast({ html: 'Message and Technician are required' });
    } else {
      const updatedLog = {
        id: currentLog.id,
        message,
        attention,
        technician,
        //todo
        // date: new Date()
      }
      updateLog(updatedLog)
      clearCurrent()
      setData({
        message: '',
        technician: ''
      });
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={style}>
      <div className='modal-content'>
        <h4>Edit Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              placeholder='Message'
              value={message}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              className='browser-default'
              name='technician'
              value={technician}
              onChange={handleChange}
            >
              <option value='disabled'>Select</option>
              {!loading && techs.map(({ id, firstName, lastName }) => (
                <option key={id} value={`${firstName} ${lastName}`}>
                  {firstName} {lastName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  className='filled-in'
                  type='checkbox'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close btn waves-effect blue'
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const style = {
  width: '75%',
  height: '75%'
};

const mapStateToProps = state => ({
  currentLog: state.log.current,
  techs: state.tech.techs,
  loading: state.tech.loading
});

export default connect(mapStateToProps,{updateLog,clearCurrent})(EditLogModal);
