import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [dataApi, setDataApi] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/${url}`);
        setDataApi(response.data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const postData = async (newData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`http://localhost:3000/${url}`, newData);
      setDataApi((prevData) => [...prevData, response.data]); // Menambahkan data baru ke state
      setIsLoading(false);
    } catch (error) {
      setServerError(error.message);
      setIsLoading(false);
    }
  };

  const deleteData = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:3000/${url}/${id}`);
      setDataApi((prevData) => prevData.filter((item) => item.id !== id));
      setIsLoading(false);
    } catch (error) {
      setServerError(error.message);
      setIsLoading(false);
    }
  };

  return { dataApi, isLoading, serverError, postData, deleteData };
};
