import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from './postsAction'

const initialState: any = {
  loading: false,
  error: null,
  success: false,
  posts: [],
  currentPage: 1,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    goToNextPage: state => {
      state.currentPage += 1
    },
    goToPreviousPage: state => {
      state.currentPage -= 1
    },
  },
  extraReducers: builder => {
    // Get posts
    builder.addCase(getPosts.pending, state => {
      state.loading = true
      state.error = null
    })

    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.loading = false
      state.posts = payload
      state.success = true
    })

    builder.addCase(getPosts.rejected, (state, { payload }) => {
      state.loading = false
      state.posts = []
      state.error = payload
    })
  },
})

export const { goToNextPage, goToPreviousPage } = postsSlice.actions

export default postsSlice.reducer
