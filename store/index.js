import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "./modules";
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
    const rootReducer = combineReducers( reducers );

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk),
    );
}
