import { IUser } from '@types'
import { BASE_URL } from '@features/posts/postsAction'

const queryUserByUserName = async (userName: string): Promise<IUser[]> => {
  const response = await fetch(`${BASE_URL}/users?username_like=${userName}`)

  return response.json()
}

export { queryUserByUserName }
