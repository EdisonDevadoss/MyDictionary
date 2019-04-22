import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './PrimaryBtnStyleSheet';

const PrimaryBtn = (props) => {
  return (
    <TouchableOpacity style={[styles.btn, props.style]} onPress={props.onPress}>
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

PrimaryBtn.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string
};

export default PrimaryBtn;
