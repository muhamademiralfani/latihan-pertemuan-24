/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ActivityList = ({ data, handleDelete }) => {
  return (
    <ul className='list-group'>
      {data.map((activity) => (
        <li key={activity.id} className='list-group-item d-flex justify-content-between align-items-center'>
          <span>{activity.title}</span>
          <div>
            <Link to={`/activity/${activity.id}`} className='btn btn-secondary btn-sm mx-1'>
              Details
            </Link>
            <button onClick={() => handleDelete(activity.id)} className='btn btn-danger btn-sm'>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

ActivityList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivityList;
