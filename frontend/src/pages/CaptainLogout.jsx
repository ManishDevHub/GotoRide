import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { use } from 'react'
export default function CaptainLogout() {

const token = localStorage.getItem('token')
 axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
    headers:{
        Authorization: `Bearer ${token} `
      }
 }).then((response) => {
    if(response.status === 200){
        localStorage.removeItem('token')
        navigator('/captain-login');
    }
 })


  return (
    <div>CaptainLogout</div>
  )
}
