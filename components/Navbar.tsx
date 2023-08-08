import { FC } from 'react'
import Link from 'next/link'

const Navbar: FC = () => {
  return (
    <nav className="h-[100px] flex items-center justify-center w-full bg-white z-10 shadow-sm mb-[20px] py-4 border-b-[1px]">
      <Link href={'/'}>
        <h1 className="text-[30px] font-bold bg-blue-500 p-[5px] text-white rounded-lg cursor-pointer">
          Postfolio
        </h1>
      </Link>
    </nav>
  )
}

export default Navbar
