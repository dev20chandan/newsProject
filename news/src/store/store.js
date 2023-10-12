// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './users/reducers'; // Import other reducers as needed

const rootReducer = combineReducers({
    users: userReducer, // Add other reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
