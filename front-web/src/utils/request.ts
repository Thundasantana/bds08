import axios from 'axios';
import { FilterGender } from '../types';

const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL
});

export const buildFilterParams = (filterGender?: FilterGender) => {
  return {
    gender: filterGender?.gender
  };
};
