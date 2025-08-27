import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserLogin() {

const [email, setEmail] = useState('')

  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
<div>
             <img className='w-20 mb-9 ' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
        <form >
            <h3 className='text-xl font-medium mb-2'>What's your email</h3>
            <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full
            text-lg placeholder:text-base' type="email" required value={email} placeholder='email@example.com' />
             <h3 className='text-xl font-medium mb-2'> Enter Password</h3>
            <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full
            text-lg placeholder:text-base' type="password" required placeholder='password' />
            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full
            text-lg placeholder:text-base' >Login</button>
           <p className='text-center'>New here?  <Link to='/signup' className='text-blue-600'> Create new Account</Link></p>
        </form>
</div>
<div>
    <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full
            text-lg placeholder:text-base' >Sign in as Captain</button>
</div>
    </div>
  )
}
