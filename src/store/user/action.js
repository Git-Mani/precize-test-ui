import { DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, GET_RANK_FAILURE, GET_RANK_REQUEST, GET_RANK_SUCCESS, SUBMIT_FORM_FAILURE, SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "./actionType";


export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const submitFormRequest = (formData) => ({
    type: SUBMIT_FORM_REQUEST,
    payload: formData,
  });
  
  export const submitFormSuccess = (response) => ({
    type: SUBMIT_FORM_SUCCESS,
    payload: response,
  });
  
  export const submitFormFailure = (error) => ({
    type: SUBMIT_FORM_FAILURE,
    payload: error,
  });

export const getRankRequest = (name) => ({
  type: GET_RANK_REQUEST,
  payload: { name },
});

export const getRankSuccess = (rank) => ({
  type: GET_RANK_SUCCESS,
  payload: { rank },
});

export const getRankFailure = (error) => ({
  type: GET_RANK_FAILURE,
  payload: { error },
});
export const updateUserRequest = (name, satScore) => ({
  type: UPDATE_USER_REQUEST,
  payload: { name, satScore },
});

export const updateUserSuccess = (success) => ({
  payload: { success },
  type: UPDATE_USER_SUCCESS,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: { error },
});

export const deleteUserRequest = (name) => ({
  type: DELETE_USER_REQUEST,
  payload: { name },
});

export const deleteUserSuccess = (success) => ({
  payload: { success },
  type: DELETE_USER_SUCCESS,
});

export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: { error },
});