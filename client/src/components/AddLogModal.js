import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import { addLog } from '../actions/logs';
import { connect } from 'react-redux';

const AddLogModal = ({ addLog, techs, loading }) => {
  const [data, setData] = useState({
    message: '',
    technician: ''
  });
  const [attention, setAttention] = useState(true);
  const { message, technician } = data;

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (message === '' || technician === '') {
      M.toast({ html: 'Message and Technician are required',classes: 'red lighten-2' });
    } else {
      const newLog = {
        message,
        technician,
        attention,
        date: new Date()
      };
      addLog(newLog);

      setData({
        message: '',
        technician: ''
      });
      setAttention(false);
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={style}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
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
              {!loading &&
                techs.map(({ _id, firstName, lastName }) => (
                  <option key={_id} value={`${firstName} ${lastName}`}>
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
  techs: state.tech.techs,
  loading: state.tech.loading
});

export default connect(
  mapStateToProps,
  { addLog }
)(AddLogModal);
