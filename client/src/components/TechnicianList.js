import React from 'react';
import { connect } from 'react-redux';

import TechnicianItem from './TechnicianItem';

const TechnicianList = ({ techs, loading }) => {
  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
      <h4>Technician List</h4>
        {!loading && techs.length ===0 &&   <h6>No Technicians added</h6>}
        <ul className='collection'>
          {!loading &&
            techs.map(tech => <TechnicianItem key={tech._id} {...tech} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  techs: state.tech.techs,
  loading: state.tech.loading
});

export default connect(mapStateToProps)(TechnicianList);
