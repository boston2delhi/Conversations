import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AppRegistry } from 'react-native';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


AppRegistry.registerComponent('conversations', () => App);
AppRegistry.runApplication('conversations', {
  rootTag: document.getElementById('web-root')
});
