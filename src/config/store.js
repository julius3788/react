import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import memberReducer from '../reducers/member'
import appReducer from '../reducers/app'
import filmReducer from '../reducers/film';
import eventReducer from '../reducers/event'


const reducers = combineReducers({
   members: memberReducer,
   apps: appReducer,
   films : filmReducer,
   events : eventReducer,
})

const middleware = applyMiddleware(logger, thunk)

export default createStore(reducers, middleware)