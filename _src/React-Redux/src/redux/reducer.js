import { INCREMENTAR, DECREMENTAR } from "./actions";

// const initialState = 0;
const initialState = {
  value: 0
}

function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENTAR:
      // return state + 1;
      return {
        ...state,
        value: state.value +1
      }
    case DECREMENTAR:
      // return state - 1;
      return {
        ...state,
        value: state.value -1
      };
    default:
      return state; 
  }
}

export default contadorReducer;


// NaN -> Not a Number -> No es un número