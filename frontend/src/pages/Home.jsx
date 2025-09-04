import React, { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';


export default function Home() {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
 const panelRef = useRef(null)
 const panelCloseRef = useRef(null)
  const submitHandle = (e) =>{
 e.preventDefault()
  }

useGSAP(()=>{
if(panelOpen){
    gsap.to(panelRef.current,{
    height:'70%',
   
  });
  gsap.to(panelCloseRef.current, {
    opacity: 1
  })
} else{
    gsap.to(panelRef.current,{
    height:'0%',
  });
    gsap.to(panelCloseRef.current, {
    opacity: 0
  })
}
},[panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
       <img className='w-20 absolute left-5 top-5 ' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
       <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
       </div>
       <div className='flex flex-col justify-end absolute h-screen top-0 w-full '>
      <div className='h-[30%] p-5 bg-white relative'>
        <h5 ref={panelCloseRef} onClick={() => {
          setpanelOpen(false)
        }} 
        className='absolute opacity-0 right-6 top-6 text-2xl'><i className="ri-arrow-down-s-line"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form  onSubmit={(e)=>{
          submitHandle(e)
        }}>
          <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-800 rounded-full'></div>
          <input
          onClick={()=>{
            setpanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />
            <input 
               onClick={()=>{
            setpanelOpen(true)
          }}
             value={destination}
          onChange={(e)=>{
            setDestination(e.target.value)
          }}
            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-4' type="text" placeholder='Enter your destination' />
        </form>
      
      </div>
        <div ref={panelRef} className='h-[0%] bg-white  '>
          <LocationSearchPanel />
      

      </div>
        
       </div>
       <div className=' fixed w-full z-10 bottom-0 bg-white px-2 py-5'>
        <h3 className='text-2xl font-semibold mb-5'> Choose a Vehicle</h3>
        <div className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center p-3  justify-between'>
       
          <img className='h-20 mr-4' src="https://www.svgrepo.com/show/408292/car-white.svg" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-md'>2 mins away</h5>
            <p className='font-medium text-sm text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>
                <div className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center p-3  justify-between'>
       
          <img className='h-14 mr-4' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-md'>3 mins away</h5>
            <p className='font-medium text-sm text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹65.17</h2>
        </div>
              <div className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center p-3  justify-between'>
       
          <img className='h-12 mr-4' src="https://www.svgrepo.com/show/395796/auto-rickshaw.svg" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='font-medium text-md'>2 mins away</h5>
            <p className='font-medium text-sm text-gray-600'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹118.21</h2>
        </div>


        

       </div>

       
       
   
    </div>

  )
}
