import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CaptainSignup() {
 const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
        email:email,
        password:password,
        username:{
                  firstName:firstName,
                   lastName:lastName,
    }
        })
        

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')

    }


    return (
        <div className='p-7  h-screen flex flex-col justify-between'>
    <div>
               <img className='w-20 mb-2 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
            <form onSubmit={(e) =>{
                submitHandler(e)
            }} >
                <h3 className='text-xl font-medium mb-2'>What's your name</h3>
                <div className='flex gap-4'>
                   <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2
                text-lg placeholder:text-base' type="text" required value={firstName}
                onChange={(e)=>{
                  setFirstName(e.target.value)
                }}
                   
                 placeholder='Firsname' />
                  <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2
                text-lg placeholder:text-base' type="text" required value={lastName}
                onChange={(e)=>{
                  setLastName(e.target.value)
                }}
                   
                 placeholder='Lastname' />
                </div>
                 <h3 className='text-xl font-medium mb-2'>What's your email</h3>
                <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full
                text-lg placeholder:text-base' type="email" required value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} placeholder='email@example.com' />
                
               
                <h3 className='text-xl font-medium mb-2'> Enter Password</h3>
                <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full
                text-lg placeholder:text-base' type="password" required value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} placeholder='password' />
                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full
                text-lg placeholder:text-base' >Signup</button>
            <p className='text-center'>Already have a account  <Link to='/captain-login' className='text-blue-600'> Login here </Link></p>
            </form>
    </div>
    <div>
       
     <p className='text-[13px] leading-tight'> This site is protected by reCAPTCHA and the <span className='underline'> Google Policy  </span>

   and <span className='underline'>Terms of Service apply</span>
     </p>
    </div>
        </div>
    )
}
