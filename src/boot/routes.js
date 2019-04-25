import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';

import store from '../redux/store';

export default function registerScreens() {
  Navigation.registerComponent(
    'Home',
    () => require('../screens/Home').default
  );
  Navigation.registerComponentWithRedux(
    'Search',
    () => require('../screens/Search').default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    'History',
    () => require('../screens/History').default,
    Provider,
    store
  );
  Navigation.registerComponent('Boot', () => require('./Boot').default);
}
