
import React, { useEffect, useState } from 'react';
import { getRankRequest,getRankSuccess,getRankFailure } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Rank = () => {
  const [name, setName] = useState('');
  const [rank, setRank] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setRank(null)
    setName('')
  },[])
  const handleGetRank = () => {
    dispatch(getRankRequest(name));
  };
  const loading = useSelector(
    (state) => state.apiReducer.loading
  );

  const error = useSelector(
    (state) => state.apiReducer.error
  );

  const successMsg = useSelector(
    (state) => state.apiReducer.success
  );
  useEffect(() => {
    if(successMsg!=null){
      setRank(successMsg)
      setErrorMsg(null)
      dispatch( getRankSuccess(null))
    }
  }, [successMsg]);
  useEffect(() => {
    if(error!=null){
      setRank(null)
      setErrorMsg(error)
      dispatch( getRankFailure(null))
    }
  }, [error]);

  return (
    <div>
      <h2>Get Rank</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
      </label>
      <button onClick={handleGetRank} disabled={loading|| !name.trim()}>  {loading ? 'Loading...' : 'Get Rank'}</button>
      {rank !== null && <p>Rank: {rank}</p>}
      {errorMsg !== null&&errorMsg && <p>Error: {errorMsg}</p>}
    </div>
  );
};

export default Rank;
