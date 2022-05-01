/* eslint-disable no-unused-vars */
import reducer from '@Redux/reducers/index'
import storage from '@Redux/storage'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
const rootReducer = combineReducers({
  reducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools())
const persistor = persistStore(store)

export { store, persistor }
