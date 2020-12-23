import {createStore} from "redux";

function reducer(state = 0, action: any): void {
    console.log(state, action);
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(reducer);

