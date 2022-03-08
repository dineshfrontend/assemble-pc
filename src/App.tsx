import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducers from './Services/Reducers/PCReducers';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer);

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <div>
      <Routes/>    
    </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
