import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@store'
import variables from '@styles/variables.module.scss'

const Home: FC = () => {
  const { posts } = useSelector((store: RootState) => store.posts)

  return <div className={variables.title}>{JSON.stringify(posts, null, 4)}</div>
}

export default Home
