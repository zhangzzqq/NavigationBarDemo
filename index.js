/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import { View } from 'react-native'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// Import the store
// import store from './pages/redux2/store'

// import App from './App';
// import App from './test/PropsTest';
// import App from './test/Com';
// import App from './test/BaseViewTest';
// import App from './test/test';
// import App from './test/flatListTest';
// import App from './pages/test/SectionListTest';
// import App from './pages/status/App';
import App from './pages/redux/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import React from 'react';

// Pass the store into the Provider
// export default connect(mapStateToProps)(App)
// export default function AppWithStore() {
//     return (
//         <Provider store={store}>
//             <App />
//         </Provider>
//     )
// }


AppRegistry.registerComponent(appName, () => App);

