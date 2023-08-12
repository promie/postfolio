import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@store'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { setCurrentPage } from '@features/posts/postsSlice'

const ITEMS_PER_PAGE = 10

const PaginationButtons: FC = () => {
  const { currentPage, totalPosts } = useSelector(
    (state: RootState) => state.posts,
  )

  const dispatch = useDispatch()

  const handlePageClick = ({ selected }: any) => {
    dispatch(setCurrentPage(selected))
  }

  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  }

  const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE)
  const showNextButton = currentPage !== totalPages - 1
  const showPrevButton = currentPage !== 0

  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          showNextButton ? (
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md">
              <BsChevronRight />
            </span>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={
          showPrevButton ? (
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md mr-4">
              <BsChevronLeft />
            </span>
          ) : null
        }
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border border-solid bg-gray-200 w-10 h-10 flex items-center justify-center rounded-md mr-4"
        activeClassName="bg-blue-600 text-white"
      />
    </motion.div>
  )
}
export default PaginationButtons
