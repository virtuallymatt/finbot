import { createStore as reduxCreateStore } from 'redux';

const createStore = () => reduxCreateStore(rootReducer);
export default createStore;
