import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTechs } from '../actions/techs';
import TechnicianItem from './TechnicianItem';

const TechnicianList = ({ techs, loading }) => {

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map(tech => <TechnicianItem key={tech.id} {...tech} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  techs: state.tech.techs,
  loading: state.tech.loading
});

export default connect(
  mapStateToProps
)(TechnicianList);
