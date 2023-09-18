import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white'>
      <div className='flex justify-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
    <Link href="#">
    <Image src='/jsm-logo.svg' alt='logo' width={55} height={40}/>
    <Image src='/hamburger-menu.svg' alt='hamburger' width={30} height={30} className='block md:hidden'/>
    </Link>
    <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
        <li className='body-text text-gradient_blue-purple !font-bold'>
            <Link href="#" target='blank'>Next.js 13.4</Link>
        </li>
        <li className='body-text  !font-bold'>
            <Link href="#" target='blank'>MasterClass</Link>
        </li>
    </ul>
    </div>
    </nav>
  ) 
}

export default Navbar
