import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const PaginationButtons: FC = () => {
  return (
    <div>
      <ReactPaginate
        breakLabel={<span></span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
            <BsChevronRight />
          </span>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={500}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md mr-4">
            <BsChevronLeft />
          </span>
        }
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border border-solid border-gray-100 hover:bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md mr-4"
      />
    </div>
  )
}
export default PaginationButtons
