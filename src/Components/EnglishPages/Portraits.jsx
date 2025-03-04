import React from 'react'
import {photo} from './Data'
import {Link} from 'react-router-dom'

const Portraits = () => {
  return (
    <div className='p-5'>
        <div className=''>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className="absolute top-6 left-6 text-white font-bold text-[15px] ">PORTRAITS AND WITH LUMINARIES</h1>
    </div>
    </div>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 font-mal'>

<div className='grid gap-2 md:grid-cols-3'>

    {
        photo.map((li)=>(
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-auto h-auto ">
            <img src={require(`./Images/Portraits/${li.img}.jpg`)} className="w-full   " alt=""/>
           
          </div>
        ))
    }




</div>





</div>

<button className='rounded overflow-hidden shadow-lg bg-tb hover:bg-white font-bold text-white hover:text-tb'> <Link to="/photo"
              className=""
              
            >
              Back To Photo
            </Link></button>

    </div>
  )
}

export default Portraits