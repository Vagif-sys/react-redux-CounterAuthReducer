import { ACTIONS } from "./actions";

export const handleSubstract = () => {
    return {
      type: ACTIONS.SUBSTRACT,
    }
  };

  export const handleReset = () => {
    return {
      type:ACTIONS.RESET,
    };
  };

  export const handleAdd = () => {
   return  {
      type: ACTIONS.ADD,
    };
  };

  export const handleAdd5 = (amount) => {
    return {
      type: ACTIONS.ADD_NUMBER,
      payload: amount,
    };
  };

  export const authToggle = () => {
    return {
      type: ACTIONS.AUTH_TOGGLE,
    };
  };