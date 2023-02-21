// Imports: Dependencies
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
// Imports: Redux
import rootReducer from "../reducers";

// Custom Options
const logger = createLogger({
  duration: false,
  timestamp: false,
  predicate: () => false,
});

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const rootReduxStore = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger))
);

const persistor = persistStore(rootReduxStore);
export { rootReduxStore, persistor };
