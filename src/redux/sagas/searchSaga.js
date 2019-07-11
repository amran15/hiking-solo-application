// import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';


// function* searchHike(action) {
//     try {
//         console.log(action.payload)
//         const searchHike = yield axios.get(`/api/trail/search?name=%${action.payload}%`);
//         yield put({ type: 'GET_TRAIL_INFO', payload: searchHike.data });
//     } catch (error) {
//         console.log('Error with retrieving search:', error);
//     }
// }


// function* searchSaga() {
//     yield takeLatest('SEARCH_HIKE', searchHike);

// }

// export default searchSaga;