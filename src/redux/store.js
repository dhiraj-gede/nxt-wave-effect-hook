import { createStore } from 'redux';
import modulesReducer from './reducers';

const store = createStore(modulesReducer);

export default store;
