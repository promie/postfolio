import { createSlice } from '@reduxjs/toolkit'
import { getPosts, getPostByUserId, getPostById } from './postsAction'
import { IPostWithUser } from '@types'

interface IInitialState {
  loading: boolean
  error: any
  success: boolean
  post: IPostWithUser | null
  posts: IPostWithUser[]
  currentPage: number
  totalPosts: number
}

const initialState: IInitialState = {
  loading: true,
  error: null,
  success: false,
  post: null,
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
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload
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

    // Get posts by user id
    builder.addCase(getPostById.pending, state => {
      state.loading = true
      state.error = null
    })

    builder.addCase(getPostById.fulfilled, (state, { payload }) => {
      state.loading = false
      state.post = payload.post
      state.success = true
    })

    builder.addCase(getPostById.rejected, (state, { payload }) => {
      state.loading = false
      state.post = null
      state.error = payload
    })
  },
})

export const {
  goToNextPage,
  goToPreviousPage,
  setCurrentPage,
  resetCurrentPage,
} = postsSlice.actions

export default postsSlice.reducer
