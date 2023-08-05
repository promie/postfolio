import { FC } from 'react'
import variables from '@styles/variables.module.scss'
import UserNameSelect from '@components/UserNameSelect'
import PaginateButtons from '@components/PaginateButtons'
import PostResults from '@components/PostResults'

const Home: FC = () => {
  return (
    <div className={variables.title}>
      <UserNameSelect />
      <PaginateButtons />
      <PostResults />
    </div>
  )
}

export default Home
