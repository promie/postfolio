import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: false,
  success: false,
  posts: [
    {
      userId: 1,
    },
    {
      userId: 2,
    },
  ],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})

export default postsSlice.reducer
