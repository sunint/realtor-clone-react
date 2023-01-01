import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  function pathMatchRoute(route) {
    if (route === pathname) {
      return true
    }
  }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img
            className='h-5 cursor-pointer'
            src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg'
            alt='logo'
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li
              className={`
              cursor-pointer
                py-3 
                text-sm 
                font-semibold 
                text-gray-400 
                border-b-[3px] 
                border-b-transparent 
                ${pathMatchRoute('/') && 'text-black border-b-red-500'}
              `}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={`
              cursor-pointer
              py-3 
              text-sm 
              font-semibold 
              text-gray-400 
              border-b-[3px] 
              border-b-transparent 
              ${pathMatchRoute('/offer') && 'text-black border-b-red-500'}
            `}
              onClick={() => navigate('/offer')}
            >
              Offer
            </li>
            <li
              className={`
              cursor-pointer
              py-3 
              text-sm 
              font-semibold 
              text-gray-400 
              border-b-[3px] 
              border-b-transparent 
              ${pathMatchRoute('/sign-in') && 'text-black border-b-red-500'}
            `}
              onClick={() => navigate('/sign-in')}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
