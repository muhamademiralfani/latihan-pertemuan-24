/* eslint-disable no-unused-vars */
import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams, useNavigate } from 'react-router-dom';
import useTimer from '../hooks/useTimer';

const ActivityDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { dataApi, isLoading } = useFetch(`activities/${id}`);
  const { time, startTimer, stopTimer, resetTimer } = useTimer();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-4 container'>
      <h2 className='text-primary'>{dataApi.title}</h2>
      <p className='text-muted'>{dataApi.description}</p>

      <div className='card border-primary my-4'>
        <div className='card-body'>
          <p className='card-text'>Time Spent: {time} seconds</p>
          <div className='btn-group'>
            <button className='btn btn-outline-success' onClick={startTimer}>
              <i className='bi bi-play-fill'></i> Start
            </button>
            <button className='btn btn-outline-warning' onClick={stopTimer}>
              <i className='bi bi-pause-fill'></i> Stop
            </button>
            <button className='btn btn-outline-danger' onClick={resetTimer}>
              <i className='bi bi-arrow-counterclockwise'></i> Reset
            </button>
          </div>
        </div>
      </div>

      <button className='btn btn-secondary mt-3' onClick={() => navigate(-1)}>
        <i className='bi bi-arrow-left'></i> Back to List
      </button>
    </div>
  );
};

export default ActivityDetail;
