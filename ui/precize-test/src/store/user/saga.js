
import { put, takeLatest } from 'redux-saga/effects';

import { submitFormFailure, submitFormSuccess, fetchDataSuccess, fetchDataFailure, getRankSuccess, getRankFailure, updateUserFailure, updateUserSuccess, deleteUserSuccess, deleteUserFailure } from './action';
import { SUBMIT_FORM_REQUEST, FETCH_DATA_REQUEST, GET_RANK_REQUEST, UPDATE_USER_REQUEST, DELETE_USER_REQUEST } from './actionType';
import { del, get, post, putReq } from '../../components/helper/apiHelper';

function* fetchDataSaga() {
    try {
        const response = yield get('list');
        yield put(fetchDataSuccess(response));
    } catch (error) {
        yield put(fetchDataFailure(error.message));
    }
}
function* submitFormSaga(action) {
    try {

        const response = yield post('add', action.payload);

        yield put(submitFormSuccess(response));
    } catch (error) {
      
        yield put(submitFormFailure(error.data));
    }
}

function* handleGetRankRequest(action) {
    try {
        const { name } = action.payload;
        const result = yield get(`getRank?name=${name}`);
        console.log(result)
        yield put(getRankSuccess(result));
    } catch (error) {
        yield put(getRankFailure(error.data));
    }
}
function* handleUpdateUserRequest(action) {
    try {
     
      const { name, satScore } = action.payload;
      const result = yield putReq(`update/${name}`, { satScore: satScore });
      yield put(updateUserSuccess(result));
    } catch (error) {
       yield put(updateUserFailure(error));
    }
  }

  function* handleDeleteUserRequest(action) {
    try {
      const { name } = action.payload;
      const result =  yield del(`delete/${name}`);
      yield put(deleteUserSuccess(result));
    } catch (error) {
      yield put(deleteUserFailure(error));
    }
  }
function* apiSaga() {
    yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
    yield takeLatest(SUBMIT_FORM_REQUEST, submitFormSaga);
    yield takeLatest(GET_RANK_REQUEST, handleGetRankRequest);
    yield takeLatest(UPDATE_USER_REQUEST, handleUpdateUserRequest);
    yield takeLatest(DELETE_USER_REQUEST, handleDeleteUserRequest);
}

export default apiSaga;
