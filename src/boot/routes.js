import { Navigation } from 'react-native-navigation';

// import Home from '../screens/Home';
// import Search from '../screens/Search';
// import History from '../screens/History';

export default function registerScreens() {
  Navigation.registerComponent(
    'Home',
    () => require('../screens/Home').default
  );
  Navigation.registerComponent(
    'Search',
    () => require('../screens/Search').default
  );
  Navigation.registerComponent(
    'History',
    () => require('../screens/History').default
  );
  Navigation.registerComponent('Boot', () => require('./Boot').default);
}
