import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styles from './HomeScreenStyleSheet';
import PrimaryBtn from '../../components/PrimaryBtn';

class HomeScreen extends Component {
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PrimaryBtn
          style={styles.margin}
          title={'History'}
          onPress={this.goToScreen.bind(this, 'History')}
        />
        <PrimaryBtn
          title={'Search'}
          onPress={this.goToScreen.bind(this, 'Search')}
        />
      </View>
    );
  }
}
HomeScreen.propTypes = {
  componentId: PropTypes.string
};
export default HomeScreen;
