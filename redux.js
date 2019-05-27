import { combineReducers, createStore} from "redux";

// action creators
const actionCreator = () =>{
    return {type: 'test_action'}
}

// reducers
const reducer = (state = {}, action) => {
    return (action.type === 'test_action') ? {content: 'new state yay'} : state
}

// combine reducers
const masterReducer = combineReducers( {reducer} );

// store

const configureStore = () =>{
    const phase1 = createStore(masterReducer);
    return phase1;
}

const store = configureStore();

export {actionCreator, store};