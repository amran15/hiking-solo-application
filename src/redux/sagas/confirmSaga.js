import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postHike(action) {
    try {
        const getTrailDetails = yield axios.post('/api/template/confirm', action.payload);
        yield put({ type: 'GET_TRAIL_INFO', payload: getTrailDetails.data })
    } catch (error) {
        console.log('error getting trails', error);
    }
}

function* confirmSaga() {
    yield takeLatest('CONFIRM_HIKE', postHike);

}

export default confirmSaga;

