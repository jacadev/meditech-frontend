import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Combina applyMiddleware y la configuración de Redux DevTools en una sola función usando compose
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);