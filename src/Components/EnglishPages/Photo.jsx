import React from 'react'
import {Link} from 'react-router-dom'
const Photo = () => {
  return (
    <div className='p-5'>
         <div className=''>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className={`absolute top-5 left-20 text-white font-bold text-[25px] `}>PHOTO</h1>
    </div>
    </div>

    <div className='max-w-screen-lg mx-auto text-justify mt-10 text-xl'>

      <div className='md:flex md:justify-evenly'>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-tb hover:bg-white  text-white hover:text-tb  w-3/5 h-1/4" data-aos="fade-right">
      <img src={require(`./Images/Portraits/01.jpg`)} className="h-[556px] w-[384px] object-cover " alt=""/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center "><Link  to="/photo-portraits-and-with-luminaries" smooth duration={500}>Portraits and With Luminaries</Link></div>
      </div>
    </div>

      
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-tb hover:bg-white  text-white hover:text-tb  w-3/5  " data-aos="fade-left">
      <img src={require(`./Images/Books/01.jpg`)} className="h-[556px] w-[384px] object-cover  " alt=""/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center "><Link  to="/photo-books" smooth duration={500}>Books</Link></div>
      </div>
    </div>

     



    </div>
   
       
       </div>
   
       


    </div>
  )
}

export default Photo