import React, { useEffect, useState } from 'react';
import { submitFormRequest } from '../store/actions';
import { useDispatch, useSelector } from "react-redux";

const Insert = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    pincode: '',
    satScore: '',
  });

   const loading = useSelector(
    (state) => state.apiReducer.loading
  );

   const errorMsg = useSelector(
    (state) => state.apiReducer.error
  );

  const successMsg = useSelector(
    (state) => state.apiReducer.success
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'satScore') {
      const numericValue = Number(value);
      if (isNaN(numericValue) || numericValue < 0 || numericValue > 100) {
        setValidationError('SAT Score must be a number between 0 and 100');
        return;
      } else {
        setValidationError('');
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFormRequest(formData));
  };

  useEffect(() => {
    if (errorMsg || successMsg) {
      setShowModal(true);
    }
  }, [errorMsg, successMsg]);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <h2>Insert Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>
        <br />
        <label>
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </label>
        <br />
        <label>
          Pincode:
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
        </label>
        <br />
        <label>
          SAT Score:
          <input type="number" name="satScore" value={formData.satScore} onChange={handleChange} required />
        </label>
        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}

        <br />
        <button type="submit" disabled={loading}>
     {loading ? 'Loading...' : 'Submit'}</button>
      </form>
     
       {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {errorMsg && <p  style={{ color: 'red' }}>Error: {errorMsg}</p>}
            {successMsg && <p  style={{ color: 'green' }}>Success: {successMsg}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Insert;
