import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import searchWord from './search.action';
import SearchBar from '../../components/SearchBar';
import styles from './SearchScreenStyleSheet';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  onChangeText = (value) => {
    this.setState({ searchText: value });
  };
  onSearch = () => {
    const { searchText } = this.state;
    if (searchText.length > 3) {
      this.props.dispatch(searchWord(searchText.trim(''))).then(() => {
        console.log('success');
      });
    }
  };
  render() {
    const { meanings } = this.props;
    console.log('meanings', meanings);
    return (
      <View style={styles.margin}>
        <Text>SearchScreen</Text>
        <SearchBar
          value={this.state.searchText}
          onChangeText={this.onChangeText}
          placeholder="Search"
          onSearch={this.onSearch}
        />
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
