import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav className="h-[100px] flex items-center justify-center w-full bg-white z-10 shadow-sm mb-[20px] py-4 border-b-[1px]">
      <div className="text-[30px] font-bold text-blue-500 bg-blue-500 p-[5px] text-white rounded-lg">
        Postfolio
      </div>
    </nav>
  )
}

export default Navbar
