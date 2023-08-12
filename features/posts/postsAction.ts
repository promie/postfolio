import { createAsyncThunk } from '@reduxjs/toolkit'
import { IPost, IPostWithUser, IUser } from '@types'

export const BASE_URL = 'https://jsonplaceholder.typicode.com'

const getPostsWithUsers = async (posts: IPost[]): Promise<IPostWithUser[]> => {
  return await Promise.all(
    posts.map(async (post: IPost) => {
      const userResponse = await fetch(`${BASE_URL}/users/${post.userId}`)
      const user = await userResponse.json()
      return { ...post, user }
    }),
  )
}

const getUserDetailsForSinglePost = async (
  userId: number | string,
): Promise<IUser[]> => {
  const response = await fetch(`${BASE_URL}/users/${userId}`)

  return response.json()
}

const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (
    { page, limit = 10 }: { page: number; limit: number },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch(
        `${BASE_URL}/posts?_page=${page}&_limit=${limit}`,
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
  async (
    {
      userId,
      page,
      limit,
    }: { userId: number | string; page: number; limit: number },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch(
        `${BASE_URL}/posts?userId=${userId}&_page=${page}&_limit=${limit}`,
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

const getPostById = createAsyncThunk(
  'posts/getPostById',
  async ({ postId }: { postId: number | string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`)

      const post = await response.json()

      // Fetch user data for each post and combine it with the post data
      const postWithUserDetails = await getUserDetailsForSinglePost(post.userId)

      return {
        post: {
          ...post,
          user: postWithUserDetails,
        },
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export { getPosts, getPostByUserId, getPostById }
