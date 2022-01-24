import { combineReducers } from "redux";

//other Reducers
import userReducer from "./user/user-reducer";

export default combineReducers({
  user: userReducer,
});
