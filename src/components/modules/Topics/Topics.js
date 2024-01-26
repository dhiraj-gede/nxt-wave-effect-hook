import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Assuming you have actions and reducers for module completion
import { markModuleCompleted } from '../../../redux/actions';
import { Route, Routes } from 'react-router-dom';
import WhatIsEffectHook from './WhatIsEffectHook';
import SideEffectsAndSync from './SideEffectsAndSync';
import Syntax from './Syntax';
import WhenToUseSideEffect from './WhenToUseSideEffect';
import Dependencies from './Dependencies';
import Avoid from './Avoid';
import CleanUp from './CleanUp';
import Navigation from '../../Navigation';

function Topics() {

  return (
    <div className="module" style={{marginTop: '5rem'}}>
      {/* Your module content here */}
      <Navigation />
    </div>
  );
}

export default Topics;
