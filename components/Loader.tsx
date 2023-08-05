import { FC } from 'react'
import { Rings } from 'react-loader-spinner'

const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center h-[60vh] md:h-[70vh]">
      <Rings
        height="80"
        width="80"
        color="#5480F2"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  )
}

export default Loader
