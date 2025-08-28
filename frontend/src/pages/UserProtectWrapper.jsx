import React, { useContext, useEffect} from 'react'
import { UserDataContext } from '../context.jsx/UserContext'
import { useNavigate } from 'react-router-dom'



export default function UserProtectWrapper({
    children
}) {

  const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
if(!token) {
    navigate('/login')
}
    }, [token] )


  return (
    <>
    {children}
    </>
    
  )
}
