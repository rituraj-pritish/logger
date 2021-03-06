import React from 'react';
import { connect } from 'react-redux';

import { deleteTech } from '../actions/techs';

const TechnicianItem = ({ firstName, lastName,_id,deleteTech }) => {
  return (
    <div className='collection-item'>
      <span>{firstName} {lastName}</span>
      <a href='#!' className='secondary-content'>
        <i className='material-icons grey-text' onClick={() => deleteTech(_id)}>delete</i>
      </a>
    </div>
  );
};

export default connect(null,{deleteTech})(TechnicianItem);
