import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postHike(action) {
    try {
        yield axios.post('/api/template/confirm', action.payload);
        yield put ({ type: 'GET_DETAILS' });
    } catch (error) {
        console.log('error getting trails', error);
    }
}

function* confirmSaga() {
    yield takeLatest('CONFIRM_HIKE', postHike);

}

export default confirmSaga;

