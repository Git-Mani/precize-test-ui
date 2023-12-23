import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS,
    SUBMIT_FORM_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    GET_RANK_FAILURE,
    GET_RANK_SUCCESS,
    GET_RANK_REQUEST,
} from './actionType';

const initialState = {
    data: null,
    loading: false,
    error: null,
    success: null
};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true, data: null, error: null };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: null };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, data: null,error: action.payload };
        case SUBMIT_FORM_REQUEST:
            return { ...state, loading: true, success: null, error: null };
        case SUBMIT_FORM_SUCCESS:
            return { ...state, loading: false, error: null, success: action.payload };
        case SUBMIT_FORM_FAILURE:
            return { ...state, loading: false, success: null, error: action.payload };
        case GET_RANK_REQUEST:
            return { ...state, loading: true, success: null, error: null };
        case GET_RANK_SUCCESS:
            return { ...state, loading: false, success: action.payload.rank, error: null };
        case GET_RANK_FAILURE:
            return { ...state, loading: false, success: null, error: action.payload.error };
        case UPDATE_USER_REQUEST:
            return { ...state, loading: true, error: null, success: null };
        case UPDATE_USER_SUCCESS:
            return { ...state, loading: false, error: null, success: action.payload.success };
        case UPDATE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload.error, success: null };
        case DELETE_USER_REQUEST:
            return { ...state, loading: true, error: null, success: null };
        case DELETE_USER_SUCCESS:
            return { ...state, loading: false, error: null, success: action.payload.success };
        case DELETE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload.error, success: null };

        default:
            return state;
    }
};

export default apiReducer;
