import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '../reducers/index';

const createStore = () => reduxCreateStore(rootReducer);
export default createStore;
