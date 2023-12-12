// first reducer
// import * as type from "../types";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { types } from '../actions';

const initialState = {
  loading: false,
  error: null,
  landingData: [],
  itemProducts: [],
};

const landingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION_LOADING_DD:
      return {
        ...state,
        landingData: action.payload,
      };

    default:
      return state;
  }
};

export default landingReducer;
