import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { filterLogs, clearFiltered } from '../../actions/logs';

const SearchBar = ({ filterLogs, clearFiltered }) => {
  const text = useRef('');

  const handleChange = () => {
    if (text.current.value === '') {
      clearFiltered();
    }
    filterLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              placeholder='search logs...'
              type='search'
              ref={text}
              onChange={handleChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(
  null,
  { filterLogs, clearFiltered }
)(SearchBar);
