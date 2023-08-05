import { createSlice } from '@reduxjs/toolkit'
import { getPosts, getPostByUserId } from './postsAction'

const initialState: any = {
  loading: true,
  error: null,
  success: false,
  posts: [],
  currentPage: 1,
  totalPosts: 0,
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
    resetCurrentPage: state => {
      state.currentPage = 1
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
      state.posts = payload.posts
      state.totalPosts = payload.totalPosts
      state.success = true
    })

    builder.addCase(getPosts.rejected, (state, { payload }) => {
      state.loading = false
      state.posts = []
      state.totalPosts = 0
      state.error = payload
    })

    // Get posts by user id
    builder.addCase(getPostByUserId.pending, state => {
      state.loading = true
      state.error = null
    })

    builder.addCase(getPostByUserId.fulfilled, (state, { payload }) => {
      state.loading = false
      state.posts = payload.posts
      state.totalPosts = payload.totalPosts
      state.success = true
    })

    builder.addCase(getPostByUserId.rejected, (state, { payload }) => {
      state.loading = false
      state.posts = []
      state.totalPosts = 0
      state.error = payload
    })
  },
})

export const { goToNextPage, goToPreviousPage, resetCurrentPage } =
  postsSlice.actions

export default postsSlice.reducer
