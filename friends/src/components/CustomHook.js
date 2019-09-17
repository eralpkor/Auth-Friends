import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();

      axiosWithAuth()
      .post('/login', inputs)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
      })
    }
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
    console.log(inputs)
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useSignUpForm;
