import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation';
import store from "./store";
import { Provider } from 'react-redux';



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>

  );
}
