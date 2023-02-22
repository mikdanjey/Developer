import { combineReducers } from "redux";
// import storage from "redux-persist/lib/storage";
// import { USER_LOGOUT, USER_LOGIN } from "../constants";
import { appReducer } from "./appReducer";

const reducers = {
  manageApp: appReducer,
};

const appRootReducer = combineReducers(reducers);

// Redux: Root Reducer
const rootReducer = (state, action) => {
  // if (action.type === USER_LOGOUT || action.type === USER_LOGIN) {
  //   storage.removeItem("persist:root");
  //   localStorage.clear();
  //   return appRootReducer(undefined, action);
  // }
  return appRootReducer(state, action);
};

// Exports
export default rootReducer;
