import { combineReducers } from 'redux';
import SectionReducer from './sectionreducer';

const rootReducer = combineReducers ({
  person : SectionReducer,
});

export default rootReducer;