import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Rings } from 'react-loader-spinner'

import { RootState } from '@store'

const PostResults: FC = () => {
  const { posts, loading } = useSelector((store: RootState) => store.posts)

  return (
    <div>
      {loading ? (
        <Rings
          height="80"
          width="80"
          color="#5480F2"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      ) : (
        JSON.stringify(posts, null, 4)
      )}
    </div>
  )
}
export default PostResults
