import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import searchWord from './search.action';

class SearchScreen extends Component {
  componentDidMount() {
    this.onSearch();
  }
  onSearch = () => {
    this.props.dispatch(searchWord('abomination')).then(() => {
      console.log('success');
    });
  };
  render() {
    const { meanings } = this.props;
    console.log('meanings', meanings);
    return (
      <View>
        <Text>SearchScreen</Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  meanings: state.search.meanings
});
SearchScreen.propTypes = {
  meanings: PropTypes.array,
  dispatch: PropTypes.func
};
export default connect(mapStateToProps)(SearchScreen);
