import { createSlice } from '@reduxjs/toolkit'

export const jobSlice = createSlice({
  name: 'job-hunter',

  initialState: {
    jobs: [],
    applyList: [],
    favoriteList: []
  },

  reducers: {
    addToJobs: (state, {payload}) => {
      state.jobs.push(payload)
    },
    addTOApplyList: (state, {payload}) => {
      state.applyList.push(payload)
    },
    AddToFavoriteList: (state, {payload}) => {
      state.favoriteList.push(payload)
    },
  },
})

export const { addToJobs, addTOApplyList, AddToFavoriteList } = jobSlice.actions

export default jobSlice.reducer