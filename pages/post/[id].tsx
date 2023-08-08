import { FC } from 'react'
import { useRouter } from 'next/router'

const SinglePost: FC = () => {
  const router = useRouter()
  const { id } = router?.query

  return (
    <div className="px-[15px] sm:px-[60px] md:px-[250px] lg:px-[275px] xl:px-[400px] 2xl:px-[500px]">
      <h1>Single Post: {id}</h1>
    </div>
  )
}
export default SinglePost
