import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context.jsx/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function UserLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})
     
    const { user, setUser} = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler =  async (e) => {
    e.preventDefault();
    const userData = {
        email:email,
        password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if(response.status === 200){
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
    }

    setEmail('')
    setPassword('')
    }


    return (
        <div className='p-7  h-screen flex flex-col justify-between'>
    <div>
                <img className='w-20 mb-2 ' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
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
            <p className='text-center'>New here?  <Link to='/signup' className='text-blue-600'> Create new Account</Link></p>
            </form>
    </div>
    <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full
                text-lg placeholder:text-base' >Sign in as Captain</Link>
    </div>
        </div>
    )
}
