const queryUserByUserName = async (userName: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?username_like=${userName}`,
  )

  return response.json()
}

export { queryUserByUserName }
