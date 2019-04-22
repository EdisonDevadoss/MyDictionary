import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { goToHome } from './Navigation';
import styles from './BootStyleSheet';

class Boot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    goToHome();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading</Text>
      </View>
    );
  }
}

export default Boot;
