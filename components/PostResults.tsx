import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@store'
import Loader from '@components/Loader'
import Post from '@components/Post'

const PostResults: FC = () => {
  const { posts, loading } = useSelector((store: RootState) => store.posts)

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <hr className="my-2 border-gray-300 w-full" />

          <div className="flex flex-wrap flex-col md:flex-row justify-around w-full">
            {posts.map((post: any) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                user={post.user}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
export default PostResults
