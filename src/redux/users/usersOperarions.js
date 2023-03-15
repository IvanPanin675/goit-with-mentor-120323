import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://64106316864814e5b6500a68.mockapi.io/';

export const getUsers = createAsyncThunk(
  'users/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const getUserById = createAsyncThunk(
  'users/getUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users/${id}`);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/add",
    async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users`, userData);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
)
