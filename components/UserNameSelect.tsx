import { FC, useMemo, useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { debounce } from 'lodash'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@store'
import { resetCurrentPage } from '@features/posts/postsSlice'
import { getPosts, getPostByUserId } from '@features/posts/postsAction'

const UserNameSelect: FC = () => {
  const [selectedOption, setSelectedOption] = useState<any | null>(null)
  const { currentPage } = useSelector((store: RootState) => store.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (selectedOption) {
      // If there is an option
      dispatch(
        getPostByUserId({ userId: selectedOption.value, page: 1, limit: 10 }),
      )

      // Reset the current page back to the first page in state
      dispatch(resetCurrentPage())
    } else {
      // If the button is clear, then fetch all the posts
      dispatch(getPosts({ page: currentPage, limit: 10 }))
    }
  }, [selectedOption, dispatch, currentPage])

  const debouncedLoadOptions = useMemo(
    () =>
      debounce((inputValue: string, callback: (options: any[]) => void) => {
        loadOptions(inputValue).then(callback)
      }, 300),
    [],
  )

  const loadOptions = async (inputValue: string) => {
    try {
      if (inputValue.trim() === '') {
        return []
      }

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username_like=${inputValue}`,
      )
      const json = await response.json()

      return json
        .filter((item: any) =>
          item.username.toLowerCase().includes(inputValue.toLowerCase()),
        )
        .map((item: any) => ({
          value: item.id,
          label: item.username,
        }))
    } catch (error) {
      console.error('Error during fetching postcodes:', error)
      return []
    }
  }

  return (
    <div>
      <AsyncSelect
        placeholder="Search"
        defaultOptions
        noOptionsMessage={() => 'Type username to search'}
        loadOptions={debouncedLoadOptions}
        cacheOptions
        isClearable
        onChange={option => setSelectedOption(option)}
      />
    </div>
  )
}

export default UserNameSelect
