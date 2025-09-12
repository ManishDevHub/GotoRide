import React from 'react'

export default function LocationSearchPanel(props) {

const Locations = [
    "24B, Near Kapoor's' cafe Sheryians Coding  School, Bhopal ",
      "20B, Near Kapoor's' cafe Sheryians Coding  School, Bhopal ",
        "15B, Near Kanpur's' cafe Sheryians Coding  School, Bhopal ",
          "24A, Near Kapoor's' cafe Sheryians Coding  School, Bhopal "
]


  return (
    <div className='ml-4 mr-4'>
  
  {

    Locations.map(function(elem,idx) {
        return <div key={idx} onClick={() =>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
        }} className='flex  gap-4  active:border-2 p-3  rounded-xl  my-3 items-center justify-start'>
    <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i class="ri-map-pin-fill"></i></h2>
    <h4 className='font-medium'>{elem}</h4>
</div>
    })
  }




    </div>
  )
}
