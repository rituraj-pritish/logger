import React from 'react';

const TechnicianItem = ({ firstName, lastName }) => {
  return (
    <div className='collection-item'>
      <span>{firstName} {lastName}</span>
      <a href='#!' className='secondary-content'>
        <i className='material-icons grey-text'>delete</i>
      </a>
    </div>
  );
};

export default TechnicianItem;
