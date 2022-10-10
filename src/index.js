const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

//Action
// Interact with the redux store carry some infromations from your application
// JS Obj with a Type

function buyCake() {
  return {
    type: BUY_CAKE,
    infomation: "1st Redux Action"
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    infomation: "2nd Redux Action"
  };
}

// Reducer
// Function that accept state and actions as an argumaent and return next state of the application

/* initial state */

const initalCakeState = {
  numOfCakes: 10
};

const initalIceCreamState = {
  numOfIceCreams: 20
};

const cakeReducer = (state = initalCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initalIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};

//combined reducers
const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

// Store
// Redux store holding the application store
const store = createStore(rootReducers, applyMiddleware(logger));

// get initial state
console.log("Initial State ", store.getState());

// update the state
const unsubs = store.subscribe(
  () => {}
  // console.log("Updated State ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubs();
