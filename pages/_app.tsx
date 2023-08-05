import type { AppProps } from 'next/app'
import '@styles/globals.css'
import { Nunito } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@store'
import Navbar from '@components/Navbar'

const font = Nunito({ subsets: ['latin'] })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <div className={font.className}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default App
