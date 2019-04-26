import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './SearchBarStyleSheet';
import { Colors } from '../../config';

const SearchBar = (props) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        {...props}
        onChangeText={props.onChangeText}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={props.onSearch}>
        <Icon name="search" size={30} color={Colors.gray} />
      </TouchableOpacity>
    </View>
  );
};

SearchBar.propTypes = {
  onChangeText: PropTypes.func,
  onSearch: PropTypes.func
};
export default SearchBar;
