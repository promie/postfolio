import Home from './index'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

// Mocking child components
jest.mock('@components/UserNameSelect', () => () => (
  <div>Mock UserNameSelect</div>
))
jest.mock('@components/PaginateButtons', () => () => (
  <div>Mock PaginateButtons</div>
))
jest.mock('@components/PostResults', () => () => <div>Mock PostResults</div>)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Home component', () => {
  it('should render without errors', () => {
    const store = mockStore({
      posts: {
        loading: false,
        error: null,
        success: false,
        post: null,
        posts: [],
        currentPage: 1,
        totalPosts: 0,
      },
    })

    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    )

    // These assertions just ensure that the mocked components are rendered
    expect(getByText('Mock UserNameSelect')).toBeInTheDocument()
    expect(getByText('Mock PaginateButtons')).toBeInTheDocument()
    expect(getByText('Mock PostResults')).toBeInTheDocument()
  })
})
