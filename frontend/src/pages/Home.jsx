import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>


        <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-5  flex justify-between flex-col w-full bg-red-400'>
           <img className='w-20 ml-8' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
            <div className='bg-white pb-7 py-5 px-10'>
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-6'>Continue</Link>
            </div>

        </div>
    </div>
  )
}
