import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getHikeHistory(action) {
    try {
        const getTrailHistory = yield axios.get('/api/template/history');
        console.log('trail history', getTrailHistory.data);
        yield put({ type: 'TRAIL_HISTORY', payload: getTrailHistory.data })
    } catch (error) {
        console.log('error getting trail history info', error);
    }
}


function* historySaga() {
    yield takeLatest('HIKE_HISTORY', getHikeHistory);
  }
  
  export default historySaga;