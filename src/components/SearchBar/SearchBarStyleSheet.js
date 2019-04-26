import { StyleSheet } from 'react-native';
import { Colors } from '../../config';

const styles = StyleSheet.create({
  inputView: {
    borderWidth: 1,
    borderColor: Colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4
  }
});

export default styles;
