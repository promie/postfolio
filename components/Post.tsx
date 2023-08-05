import { FC } from 'react'

interface PostProps {
  title: string
  body: string
  user: any
}

const Post: FC<PostProps> = ({ title, body, user }) => {
  return (
    <div className="relative bg-white py-4 px-4 rounded-3xl w-[345px] my-4 shadow-xl mt-[50px]">
      <div className=" w-[50px] h-[50px] text-white flex items-center absolute rounded-full py-4 px-4 bg-blue-500 left-4 -top-2 shadow-xl uppercase flex items-center justify-center">
        {user.username.slice(0, 2)}
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">{title}</p>
        <div className="flex space-x-2 text-gray-400 text-sm">
          <p>{body}</p>
        </div>
        <div className="border-t-2 mt-[10px]"></div>

        <div className="flex justify-between">
          <div className="my-2">
            <p className="font-semibold text-base mb-2">Author</p>
            <div className="flex flex-col">
              <div className="text-gray-400 text-sm flex-col">
                <p className="italic">{user.username}</p>
              </div>
              <div className="text-gray-400 text-sm flex-col">
                <p className="italic">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="my-[15px]">
            <div className="text-base text-gray-400 font-semibold mt-[30px] hover:underline cursor-pointer">
              <p>View</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
