import { createAsyncThunk } from '@reduxjs/toolkit'

const getPosts = createAsyncThunk(
  'posts/getPosts',
  async ({ page, limit = 10 }: any, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
      )

      return response.json()
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export { getPosts }
