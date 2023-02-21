import { MANAGE_APP } from "../constants";

const appAction = rawData => {
  return {
    type: MANAGE_APP.MANAGE_APP,
    payload: rawData
  }
}

export {
  appAction,
};
