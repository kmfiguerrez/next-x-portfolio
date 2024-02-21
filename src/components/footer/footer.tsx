import React from 'react'
import { Copyright } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='flex justify-center p-4 text-white/50'>
      <Copyright size={12}/>
      <p className='text-xs'>KMF 2023 | All Rights Reserved.</p>
    </footer>
  )
}


export default Footer