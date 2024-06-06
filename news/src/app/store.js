import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import getUserDetails from '../features/authSlice';
import  getFeedResponse  from '../features/Feed/feedSlice';

// Define persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['getUserDetails', 'getFeedResponse']  // Specify which reducers to persist
};

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  getUserDetails,
  getFeedResponse
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
