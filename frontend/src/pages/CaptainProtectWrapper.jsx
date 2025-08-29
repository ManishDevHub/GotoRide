import React, { useContext, useEffect, useState} from 'react'
import { CaptainDataContaxt } from '../context.jsx/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function CaptainProtectWrapper({
    children
}) {

  const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const  {  captain, setCaptain} = useContext(CaptainDataContaxt)
    const [ isLoding, setIsLoding ]= useState(true)
    useEffect(() => {
if(!token) {
    navigate('/captain-login')
}
 axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile` , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if(response.status === 200) {
            setCaptain(response.data.captain)
            setIsLoding(false )
        }
    }).catch( err => {
        console.log(err)
        localStorage.removeItem('token')
        navigate('/captain-login')
    })

    }, [token] )



   
    if(isLoding){
       return <div>Loading...</div>
    }

    

  return (
    <>
    {children}
    </>
    
  )
}
