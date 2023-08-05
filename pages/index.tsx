import { FC } from 'react'
import UserNameSelect from '@components/UserNameSelect'
import PaginateButtons from '@components/PaginateButtons'
import PostResults from '@components/PostResults'

const Home: FC = () => {
  return (
    <div className="px-[15px] md:px-[500px]">
      <UserNameSelect />
      <PaginateButtons />
      <PostResults />
    </div>
  )
}

export default Home
