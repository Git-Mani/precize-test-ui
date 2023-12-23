import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserRequest,updateUserFailure,updateUserSuccess } from '../store/actions';

const UpdateRecord = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [satScore, setSatScore] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [validationError, setValidationError] = useState('');
  const loading = useSelector((state) => state.apiReducer.loading);
  const error = useSelector((state) => state.apiReducer.error);
  const success = useSelector((state) => state.apiReducer.success);

  useEffect(() => {
    if(success!=null){
      setSuccessMsg(success)
      dispatch( updateUserSuccess(null))
    }
  }, [success]);
  useEffect(() => {
    if(error!=null){
      setErrorMsg(error)
      dispatch( updateUserFailure(null))
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('')
    dispatch(updateUserRequest(name, satScore));
  };
  const handleChange = (value) => {
    const numericValue = Number(value);
    if (isNaN(numericValue) || numericValue < 0 || numericValue > 100) {
      setValidationError('SAT Score must be a number between 0 and 100');
      return;
    } else {
      setValidationError('');
    }
    setSatScore(value)
  };



  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        {/* Add other input fields for the updated data */}
        <label>
          Sat Score:
          <input
            type="text"
            value={satScore}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
        </label>
        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}

        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update User'}
        </button>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
      </form>
    </div>
  );
};

export default UpdateRecord;
