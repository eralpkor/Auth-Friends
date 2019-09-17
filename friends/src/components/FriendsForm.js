import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

function Friends(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData =() => {
    axiosWithAuth()
    .get('/friends')
    .then(res => {
      setState(res.data);
    })
    .catch()
  };
}