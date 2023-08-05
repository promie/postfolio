import { createAsyncThunk } from '@reduxjs/toolkit'

const getPostsWithUsers = async (posts: any) => {
  return await Promise.all(
    posts.map(async (post: any) => {
      const userResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`,
      )
      const user = await userResponse.json()
      return { ...post, user }
    }),
  )
}

const getPosts = createAsyncThunk(
  'posts/getPosts',
  async ({ page, limit = 10 }: any, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
      )

      const totalPosts = parseInt(
        response.headers.get('X-Total-Count') as string,
      )

      const posts = await response.json()

      // Fetch user data for each post and combine it with the post data
      const postsWithUsers = await getPostsWithUsers(posts)

      return {
        posts: postsWithUsers,
        totalPosts,
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

const getPostByUserId = createAsyncThunk(
  'posts/getPostByUserId',
  async ({ userId, page, limit }: any, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_page=${page}&_limit=${limit}`,
      )

      const totalPosts = parseInt(
        response.headers.get('X-Total-Count') as string,
      )

      const posts = await response.json()

      // Fetch user data for each post and combine it with the post data
      const postsWithUsers = await getPostsWithUsers(posts)

      return {
        posts: postsWithUsers,
        totalPosts,
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export { getPosts, getPostByUserId }
