import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getDetails(action) {
    try {
        const getTrailDetails = yield axios.get('/api/trail');
        console.log('trails:', getTrailDetails);
        yield put({ type: 'GET_TRAIL_INFO', payload: getTrailDetails.data })
        yield put({ type: 'SEARCH_HIKE', payload: getTrailDetails.data })
    } catch (error) {
        console.log('error getting trails', error);
    }
}



function* detailSaga() {
    yield takeLatest('GET_DETAILS', getDetails);

  }
  
  export default detailSaga;