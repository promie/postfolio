import { IUser } from '@types'

const queryUserByUserName = async (userName: string): Promise<IUser[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?username_like=${userName}`,
  )

  return response.json()
}

export { queryUserByUserName }
