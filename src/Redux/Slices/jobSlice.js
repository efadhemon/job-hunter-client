import { createSlice } from '@reduxjs/toolkit'
import jobsData from '../../FakeData/JobsData'

export const jobSlice = createSlice({
  name: 'jobs',

  initialState: {
    allJobs: jobsData,
    applyList: [],
    favoriteList: []
  },

  reducers: {
    addToJobs: (state, {payload}) => {
      state.allJobs.push(payload)
    },
    addTOApplyList: (state, {payload}) => {
      state.applyList.push(payload)
    },
    addToFavoriteList: (state, {payload}) => {
      state.favoriteList.push(payload)
    },
    removeToFavoriteList: (state, {payload}) => {
      const newFavoriteList = state.favoriteList.filter((j) => j.id !== payload)
      state.favoriteList = [...newFavoriteList];
    },
  },
})

export const { addToJobs, addTOApplyList, addToFavoriteList, removeToFavoriteList } = jobSlice.actions

export default jobSlice.reducer