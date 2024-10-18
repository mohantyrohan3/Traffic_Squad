import React from 'react';
import { StyleSheet, View } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

const Index1 = () => {
    return (
        <Provider store={store}>
        <App />
        </Provider>
    );
}

const styles = StyleSheet.create({})

export default Index1;
