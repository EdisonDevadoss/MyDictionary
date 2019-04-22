import { Navigation } from 'react-native-navigation';
import { Colors } from '../config';

export const goToHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Home',
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ],
        options: {
          topBar: {
            background: {
              color: Colors.primary
            },
            title: {
              text: 'My Dictionary',
              color: Colors.light
            }
          }
        }
      }
    }
  });

export const goToSearch = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Search',
        children: [
          {
            component: {
              name: 'Search'
            }
          }
        ]
      }
    }
  });

export const goToHistory = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'History',
        children: [
          {
            component: {
              name: 'History'
            }
          }
        ]
      }
    }
  });
