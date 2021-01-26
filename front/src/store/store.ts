import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";
import {TweetsState} from "./ducks/tweets/contracts/state";
import {TagsState} from "./ducks/tags/contracts/state";
import {TweetState} from "./ducks/tweet/contracts/state";
import {UserState} from "./ducks/user/contracts/state";
import {UsersState} from "./ducks/randomUsers/contracts/state";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
    tweets: TweetsState;
    tags: TagsState;
    tweet: TweetState;
    user: UserState;
    users: UsersState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
