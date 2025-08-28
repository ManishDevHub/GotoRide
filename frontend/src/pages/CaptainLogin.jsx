import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContaxt } from '../context.jsx/CaptainContext'
export const CaptainLogin = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const  { captain, setCaptain } = React.useContext(CaptainDataContaxt)
const navigate = useNavigate()

const submitHandler = async (e) => {
e.preventDefault();
const captain = {
    email:email,
    password:password
}

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain )

if(response.status === 200) {
    const data = response.data

    setCaptain(data.captain)
    localStorage.setItem('token', data.token)
    navigate('/captain-home')
}




setEmail('')
setPassword('')
}


  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
<div>
             <img className='w-20 mb-2 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={(e) =>{
            submitHandler(e)
        }} >
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
            text-lg placeholder:text-base' >Login</button>
           <p className='text-center'>Join a fleet?  <Link to='/captain-signup' className='text-blue-600'> Register as a Captain</Link></p>
        </form>
</div>
<div>
    <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full
            text-lg placeholder:text-base' >Sign in as User</Link>
</div>
    </div>
  )
}
