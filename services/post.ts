const fetchPosts = async (page: number, limit: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
    )

    return response.json()
  } catch (error) {
    console.error(`Error fetching data: ${error}`)
  }
}

export { fetchPosts }
