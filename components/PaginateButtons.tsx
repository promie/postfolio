import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@store'
import { goToNextPage, goToPreviousPage } from '@features/posts/postsSlice'

const FIRST_PAGE = 1
const ITEMS_PER_PAGE = 10

const PaginateButtons: FC = () => {
  const { currentPage, totalPosts } = useSelector(
    (state: RootState) => state.posts,
  )
  const dispatch = useDispatch()

  const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE)

  return (
    <div className="flex flex-row mx-auto my-[20px] justify-center">
      <button
        onClick={() => dispatch(goToPreviousPage())}
        disabled={currentPage === FIRST_PAGE}
        className="bg-blue-500 text-white rounded-l-md border-r border-gray-100 py-1 px-2 disabled:bg-gray-200 disabled:text-gray-500 text-sm"
      >
        <div className="flex flex-row align-middle">
          <svg
            className="w-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="ml-1">Prev</p>
        </div>
      </button>
      <div className="flex items-center">
        <p className="mx-4 text-gray-500 text-sm">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      <button
        onClick={() => dispatch(goToNextPage())}
        disabled={currentPage === totalPages}
        className="bg-blue-500 text-white rounded-r-md py-1 px-2 disabled:bg-gray-200 disabled:text-gray-500 text-sm"
      >
        <div className="flex flex-row align-middle">
          <span className="mr-1">Next</span>
          <svg
            className="w-4 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  )
}

export default PaginateButtons
