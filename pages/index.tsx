import { FC } from 'react'
import variables from '@styles/variables.module.scss'
import PostResults from '@components/PostResults'

const Home: FC = () => {
  return (
    <div className={variables.title}>
      <PostResults />
    </div>
  )
}

export default Home
