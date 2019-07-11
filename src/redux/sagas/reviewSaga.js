import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* updateReviews(action) {
    try {
        yield axios.put(`/api/trail/review/${action.payload.id}`, action.payload);
        yield put ({ type: 'TRAIL_HISTORY' });
    } catch (error) {
        console.log('error updating reviews', error);
    }
}

function* reviewSaga() {
    yield takeLatest('REVIEW_HIKE', updateReviews);

}

export default reviewSaga;
//