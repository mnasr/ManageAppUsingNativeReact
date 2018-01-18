import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCt_SGm2DDMLVaE5YP2vyOWZZ1r8rrP1W4',
      authDomain: 'manager-7f53e.firebaseapp.com',
      databaseURL: 'https://manager-7f53e.firebaseio.com',
      projectId: 'manager-7f53e',
      storageBucket: 'manager-7f53e.appspot.com',
      messagingSenderId: '767465643137'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
