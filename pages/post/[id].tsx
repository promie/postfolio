import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@store'
import { getPostById } from '@features/posts/postsAction'
import Loader from '@components/Loader'
import Post from '@components/Post'

const SinglePost: FC = () => {
  const { post, loading } = useSelector((store: RootState) => store.posts)
  const dispatch = useAppDispatch()

  const router = useRouter()
  const { id } = router?.query

  useEffect(() => {
    if (id) {
      dispatch(getPostById({ postId: id }))
    }
  }, [id, dispatch])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="px-[15px] sm:px-[60px] md:px-[250px] lg:px-[275px] xl:px-[400px] 2xl:px-[500px]">
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            user={post.user}
          />
        </div>
      )}
    </div>
  )
}
export default SinglePost
