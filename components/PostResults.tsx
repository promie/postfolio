import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@store'

const PostResults: FC = () => {
  const { posts } = useSelector((store: RootState) => store.posts)

  return <div>{JSON.stringify(posts, null, 4)}</div>
}
export default PostResults
