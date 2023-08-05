import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@store'
import Loader from '@components/Loader'

const PostResults: FC = () => {
  const { posts, loading } = useSelector((store: RootState) => store.posts)

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <hr className="my-2 border-gray-300 w-full" />
          <div>{JSON.stringify(posts, null, 4)}</div>
        </>
      )}
    </div>
  )
}
export default PostResults
