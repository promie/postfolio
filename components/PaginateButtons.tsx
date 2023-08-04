import { FC } from 'react'
import { useSelector } from 'react-redux'
import { goToNextPage, goToPreviousPage } from '@features/posts/postsSlice'
import { RootState, useAppDispatch } from '@store'

const FIRST_PAGE = 1
const PaginateButtons: FC = () => {
  const { currentPage } = useSelector((store: RootState) => store.posts)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        disabled={currentPage === FIRST_PAGE}
        onClick={() => dispatch(goToPreviousPage())}
      >
        Prev
      </button>
      <button onClick={() => dispatch(goToNextPage())}>Next</button>
    </div>
  )
}
export default PaginateButtons
