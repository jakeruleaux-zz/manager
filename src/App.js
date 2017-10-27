import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends React.Component {
  componentWillMount(){
   const config = {
   apiKey: "AIzaSyATES7bJQllMKGyDl9hD0aHa7hTA-CCW-g",
   authDomain: "manager-c6155.firebaseapp.com",
   databaseURL: "https://manager-c6155.firebaseio.com",
   projectId: "manager-c6155",
   storageBucket: "manager-c6155.appspot.com",
   messagingSenderId: "617798770778"
 };
 firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
