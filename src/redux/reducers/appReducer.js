import { MANAGE_APP } from "../constants";

const initialState = {
  rawData: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case MANAGE_APP.MANAGE_APP:
      return {
        ...state,
        rawData: action.payload,
      };
    default:
      return state;
  }
};

export { appReducer };
