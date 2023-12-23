import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserRequest,deleteUserSuccess,deleteUserFailure } from '../store/actions';

const DeleteRecord = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const loading = useSelector((state) => state.apiReducer.loading);
  const error = useSelector((state) => state.apiReducer.error);
  const success = useSelector((state) => state.apiReducer.success);
  const handleDelete = () => {
    dispatch(deleteUserRequest(name));
  };
  useEffect(() => {
    if(success!=null){
      setSuccessMsg(success)
      dispatch( deleteUserSuccess(null))
    }
  }, [success]);
  useEffect(() => {
    if(error!=null){
      setErrorMsg(error)
      dispatch( deleteUserFailure(null))
    }
  }, [error]);
  return (
    <div>
      <h2>Delete User</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
      </label>
      <button onClick={handleDelete} disabled={loading|| !name.trim()}>
        {loading ? 'Deleting...' : 'Delete User'}
      </button>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
    </div>
  );
};

export default DeleteRecord;
