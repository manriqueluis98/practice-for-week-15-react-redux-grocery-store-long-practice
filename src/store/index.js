import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

const rootReducer = combineReducers({

})

let enhancer;

if (process.env.NODE_ENV !== 'production'){
    const logger = require('redux-logger').default;
    const composeEnhancers = 
    window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    enhancer = composeEnhancers(applyMiddleware(logger))
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore