import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import getUserDetails from '../features/authSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, getUserDetails);

const store = configureStore({
  reducer: {
    getUserDetails: persistedReducer,
  },
});

const persistor = persistStore(store);

export  { store, persistor };
