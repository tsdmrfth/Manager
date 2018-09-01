import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

/**
 * Created by Fatih Taşdemir on 2.09.2018
 */

class App extends Component {

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello
                    </Text>
                </View>
            </Provider>
        );
    }

}

export default App;