import { FC, useEffect, useState } from 'react'
import variables from '@styles/variables.module.scss'
import { fetchPosts } from '@services/post'

const Home: FC = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts(1, 10)
      setPosts(posts)
    }

    getPosts()
  }, [])

  return <div className={variables.title}>{JSON.stringify(posts, null, 4)}</div>
}

export default Home
