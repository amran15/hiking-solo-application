import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import detailSaga from './detailSaga';
import confirmSaga from './confirmSaga';
import historySaga from './historySaga';
import deleteSaga from './deleteSaga';
import reviewSaga from './reviewSaga';
// import searchSaga from './searchSaga';



// rootSaga is the primary saga.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
// and detailSaga triggers providing details 
// and confirmSaga triggers confirming a hike
// and historySaga triggers providing the hike history when dispatched
// and deleteSaga triggers a delete a trail from the hike table
// and reviewSaga triggers a
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    detailSaga(),
    confirmSaga(), 
    historySaga(), 
    deleteSaga(), 
    reviewSaga(), 

  
  ]);
}
