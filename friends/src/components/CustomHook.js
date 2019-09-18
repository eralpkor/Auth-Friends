import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';

const useSignUpForm = (props) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();

      axiosWithAuth()
      .post('/login', inputs)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends')
      })
      .catch(err => console.log(err))
    }
  };

  // if (localStorage.getItem('token')) return <Redirect to='friendslist' />

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
