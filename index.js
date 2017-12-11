// Root of the web running
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('conversations', () => App);
AppRegistry.runApplication('conversations', {
  rootTag: document.getElementById('web-root');
});
