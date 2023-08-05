import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@store'
import { getPosts } from '@features/posts/postsAction'

const PostResults: FC = () => {
  const { posts, currentPage } = useSelector((store: RootState) => store.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPosts({ page: currentPage, limit: 10 }))
  }, [dispatch, currentPage])

  return <div>{JSON.stringify(posts, null, 4)}</div>
}
export default PostResults
