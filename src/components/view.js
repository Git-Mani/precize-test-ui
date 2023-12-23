import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from '../store/actions';
const View = () => {
  const insertedData = useSelector((state) => state.apiReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  return (
    <div>
      <h2>Profile View</h2>
      <div>
        <h3>Data</h3>
        <pre>{JSON.stringify(insertedData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default View;
