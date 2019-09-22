import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from './layout/Preloader';
import {connect} from 'react-redux'

import { getTechs } from '../actions/techs';
import {getLogs} from '../actions/logs'

const Logs = ({getTechs,getLogs,loading,logs}) => {

  useEffect(() => {
    getLogs();
    getTechs();
  }, []);

  if (loading) {
    return <Preloader/>;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = ({log}) => ({
  logs: log.logs,
  loading: log.loading
})

export default connect(mapStateToProps,{getLogs,getTechs})(Logs);
