import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//const only needed for receiving information back 
function* deleteHike(action) {
    try {
       yield axios.delete(`/api/template/delete/${action.payload}`);
       yield put ({ type: 'GET_DETAILS' });
    } catch (error) {
        console.log('error deleting trails', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_HISTORY', deleteHike);

}

export default deleteSaga;