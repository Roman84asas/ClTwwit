import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./ducks/saga";
import {TweetsState} from "./ducks/tweets/contracts/state";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const sagaMiddleware = createSagaMiddleware();

export interface RootState {
    tweets: TweetsState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
