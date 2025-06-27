// import { createStore } from "redux";
// import contadorReducer from "./reducer";


// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const store = createStore(contadorReducer,  /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// export default store;

import { compose, createStore } from "redux";
import contadorReducer from "./reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
//                       window.__REDUX_DEVTOOLS_EXTENSION__

const store = createStore(contadorReducer, composeEnhancers());

export default store;


