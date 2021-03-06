import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTech } from '../actions/techs';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechnicianModal = ({addTech}) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: ''
  });

  const { firstName, lastName } = data;

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value});
  };

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Firstname and Lastname are required',classes: 'red lighten-2' });
    } else {
      addTech({firstName,lastName});
      setData({
        firstName: '',
        lastName: ''
      });
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Enter Technician Details</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={handleChange}
            />
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

export default connect(null,{addTech})(AddTechnicianModal);
