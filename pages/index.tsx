import { FC } from 'react'
import UserNameSelect from '@components/UserNameSelect'
import PaginationButtons from '@components/PaginationButtons'
import PaginateButtons from '@components/PaginateButtons'
import PostResults from '@components/PostResults'

const Home: FC = () => {
  return (
    <div className="px-[15px] sm:px-[60px] md:px-[250px] lg:px-[275px] xl:px-[400px] 2xl:px-[500px]">
      <UserNameSelect />
      <PaginationButtons />
      <PaginateButtons />
      <PostResults />
    </div>
  )
}

export default Home
