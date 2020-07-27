import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import {userReducer}    from './user/userReducer';

const rootReducer = combineReducers({
             user : userReducer,
            });
const store = createStore ( rootReducer, applyMiddleware(logger, reduxThunk) );

export default store;