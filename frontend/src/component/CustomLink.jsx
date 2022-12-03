import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLink({to, children}) {
  return (
    <Link 
         className='dark:text-gray-400 text-gray-500
          dark:hover:text-white hover:text-primary transition' 
         to={to}
         >
          {children}
    </Link>
  )
}
