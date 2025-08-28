import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContaxt } from '../context.jsx/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CaptainSignup() {

    const navigate = useNavigate()
 const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    



const {captain, setCaptain } = React.useContext(CaptainDataContaxt)



    const submitHandler =  async (e) => {
    e.preventDefault();
    const captainData = {
        email:email,
        password:password,
        fullname:{
                  firstname:firstName,
                   lastname:lastName,
    },
    vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
       vehicleType: vehicleType
    }
}

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
        if(response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

    }


    return (
        <div className='p-7  h-screen flex flex-col justify-between'>
    <div>
               <img className='w-20 mb-2 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
            <form onSubmit={(e) =>{
                submitHandler(e)
            }} >
                <h3 className='text-xl font-medium mb-2'>What's our Captain's name</h3>
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
                 <h3 className='text-xl font-medium mb-2'>What's our Captain's email</h3>
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
                <h3 className="text-xl font-medium mb-2">Vehicle Information</h3>

<div className="flex gap-4 mb-4">
  <input
    className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2
    text-lg placeholder:text-base"
    type="text"
    required
    value={vehicleColor}
    onChange={(e) => setVehicleColor(e.target.value)}
    placeholder="Vehicle Color"
  />

  <input
    className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2
    text-lg placeholder:text-base"
    type="text"
    required
    value={vehiclePlate}
    onChange={(e) => setVehiclePlate(e.target.value)}
    placeholder="Vehicle Plate"
  />
</div>

<div className="flex gap-4 mb-7">
  <input
    className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2
    text-lg placeholder:text-base"
    type="number"
    required
    value={vehicleCapacity}
    onChange={(e) => setVehicleCapacity(e.target.value)}
    placeholder="Vehicle Capacity"
  />

  <select
    className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
    required
    value={vehicleType}
    onChange={(e) => setVehicleType(e.target.value)}
  >
    <option  value="">Select Vehicle</option>
    <option value="car">Car</option>
    <option value="auto">auto</option>
    <option value="motarcycle">motarcycle</option>
  </select>
</div>

                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full
                text-lg placeholder:text-base' >Create Captain account</button>
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
