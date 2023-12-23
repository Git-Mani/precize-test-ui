import { all, fork } from "redux-saga/effects";
import apiSaga from "./user/saga";

export default function* rootSaga() {
    yield all([
      fork(apiSaga)
    ])
  }