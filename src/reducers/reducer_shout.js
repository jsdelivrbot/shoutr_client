import { FETCH_SHOUT } from "../actions/index";
const INITIAL_STATE = null;

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_SHOUT:
    return action.payload
  default: 
    return state;
  }
}