import { combineReducers } from 'redux';
import reducerShout from "./reducer_shout";
const rootReducer = combineReducers({
  shout: reducerShout
});

export default rootReducer;
