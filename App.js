import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import MainNavigator from './navigation/AppNavigator'

export default function App() {
  return (
    <MainNavigator />
  );
}
