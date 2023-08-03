import { ACTIONS } from "../actions/actions"

const authReducer =(state = true, action)=>{

    if(action.type === ACTIONS.AUTH_TOGGLE){
        return state = !state
    }
  
    return state
  }

  export default authReducer