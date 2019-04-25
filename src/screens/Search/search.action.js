import axios from 'axios';
import { env } from '../../config';
import { searchStart, searchSuccess, searchError } from '../../redux/actions';

const searchWord = (word) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(searchStart());
      axios
        .get(`${env.searchUrl}${word}&lang=en`)
        .then((res) => {
          console.log(res.data);
          dispatch(searchSuccess(res.data));
          resolve();
        })
        .catch((err) => {
          console.log(err);
          dispatch(searchError());
          reject();
        });
    });
};

export default searchWord;
