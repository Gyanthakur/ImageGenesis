import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [user, setUser] = useState(null)
  return (
    <div>
    <Link to='/' className='flex m-1 gap-2'>
      <img src={assets.logo_won} alt="" className='w-10 sm:w-10 lg:w-10 rounded-lg' />
      <h1 className='text-3xl'>ImageGenesis</h1>
    </Link>


    <div>
      {
      user ? 
      <div></div>
      :
      <div>
        <p>Pricing</p>
        <button>Login</button>
      </div>
    }
    </div>
    </div>
  )
}

export default Navbar
