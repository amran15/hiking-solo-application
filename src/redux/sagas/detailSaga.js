import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getDetails(action) {
    try {
        const getTrailDetail = yield axios.get('/api/template');
        console.log('trails:', getTrailDetail);
        yield put({ type: 'GET_TRAIL_INFO', payload: getTrailDetail.data })
    } catch (error) {
        console.log('error getting trails', error);
    }
}




function* detailSaga() {
    yield takeLatest('GET_DETAILS', getDetails);
  }
  
  export default detailSaga;