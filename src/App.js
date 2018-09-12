import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import './ReactotronConfig';
import ReduxThunk from 'redux-thunk';
import RouterComponent from "./RouterComponent";

/**
 * Created by Fatih Taşdemir on 2.09.2018
 */

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBP6eTxxdTVpWjR7FbuNgUeiO0x1jHlFdg',
            authDomain: 'manager-d8d87.firebaseapp.com',
            databaseURL: 'https://manager-d8d87.firebaseio.com',
            projectId: 'manager-d8d87',
            storageBucket: 'manager-d8d87.appspot.com',
            messagingSenderId: '563445212087'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <RouterComponent/>
            </Provider>
        );
    }

}

export default App;