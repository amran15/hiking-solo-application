import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* updateReview(action) {
    try {
        yield axios.put(`/api/template/review/${action.payload.id}`, action.payload);
        yield put ({ type: 'GET_DETAILS' });
    } catch (error) {
        console.log('error updating reviews', error);
    }
}

function* reviewSaga() {
    yield takeLatest('EDIT_HIKE', updateReview);

}

export default reviewSaga;