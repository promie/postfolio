import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const PaginationButtons: FC = () => {
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
        duration: 1,
      },
    },
  }

  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
            <BsChevronRight />
          </span>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={500}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md mr-4">
            <BsChevronLeft />
          </span>
        }
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border border-solid border-gray-100 hover:bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md mr-4"
        activeClassName="bg-blue-500 text-white"
      />
    </motion.div>
  )
}
export default PaginationButtons
