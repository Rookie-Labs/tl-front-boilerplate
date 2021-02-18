/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import axiosClient from '../config/axios.config';

/* PUBLIC METHODS
========================================================= */

export const getCryptoCurrencies = async () => {
  try {
    const response = await axiosClient.get('https://api.coincap.io/v2/assets?limit=20');
    return response.data.data;
  } catch (error) {
    console.log('Something went wrong when trying to get cryptocurrencies from Coincap', error);
  }
};
