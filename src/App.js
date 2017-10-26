import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LogInForm from './components/LogInForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LogInForm />
        </View>
      </Provider>
    );
  }
}

export default App;
