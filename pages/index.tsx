import { FC } from 'react'
import variables from '@styles/variables.module.scss'
import PaginateButtons from '@components/PaginateButtons'
import PostResults from '@components/PostResults'

const Home: FC = () => {
  return (
    <div className={variables.title}>
      <PaginateButtons />
      <PostResults />
    </div>
  )
}

export default Home
