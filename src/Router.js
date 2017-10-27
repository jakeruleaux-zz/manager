import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LogInForm from './components/LogInForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 5 }}>
      <Scene key="root" >
        <Scene key="login" component={LogInForm} title="Please Login" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
