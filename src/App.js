import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';

import store from './redux/store'; // Assuming your store is defined in `/redux/store.js`
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();

  // Fetch initial module completion data from localStorage if needed
  useEffect(() => {
    const storedModules = localStorage.getItem('completedModules');
    if (storedModules) {
      dispatch({ type: 'MODULE_COMPLETION_INITIALIZE', data: storedModules });
    }
  }, []);

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
