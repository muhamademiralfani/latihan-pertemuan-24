/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ActivityForm from '../components/ActivityForm';
import ActivityList from '../components/ActivityList';
import { useFetch } from '../hooks/useFetch';
import Swal from 'sweetalert2';

const Home = () => {
  const [showModal, setShowModal] = useState(false); // State untuk mengontrol modal
  const [data, setData] = useState([]);
  const [currentActivity, setcurrentActivity] = useState({
    title: '',
    description: '',
  });

  const { dataApi, isLoading, postData, deleteData } = useFetch('activities');

  useEffect(() => {
    if (dataApi) {
      setData(dataApi);
    }
  }, [dataApi, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update state currentStudent
    setcurrentActivity((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim data
    postData(currentActivity).then(() => {
      // Reset form setelah berhasil mengirim data
      setData((prevData) => [...prevData, currentActivity]);
    });

    // Menampilkan SweetAlert ketika berhasil
    Swal.fire({
      title: 'Success!',
      text: 'Activity has been added successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        setShowModal(false);
      }
    });
  };

  const handleDelete = (id) => {
    deleteData(id).then(() => {
      setData((prevData) => prevData.filter((activity) => activity.id !== id));
    });
    // Menampilkan SweetAlert ketika berhasil
    Swal.fire({
      title: 'Success!',
      text: 'Activity has been deleted successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className='container'>
      <h1 className='my-4'>Daily Activity Manager</h1>
      <button className='btn btn-primary mb-3' onClick={() => setShowModal(true)}>
        Add Activity
      </button>
      <ActivityList data={data} handleDelete={handleDelete} /> 
      <ActivityForm showModal={showModal} setShowModal={setShowModal} onChange={handleInputChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
