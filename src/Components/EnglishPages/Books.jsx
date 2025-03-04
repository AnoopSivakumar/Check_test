import React from 'react'
import {book} from './Data'
import {Link} from 'react-router-dom'

const Books = () => {
  return (
    <div className='p-5'>
        <div className=''>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className={`absolute top-5 left-20 text-white font-bold text-[25px] `}>BOOKS</h1>
    </div>
    </div>

    <div className='max-w-screen-lg mx-auto text-justify mt-4 font-mal'>

    <div className='grid gap-2 md:grid-cols-3'>

        {
            book.map((li)=>(
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-tb hover:bg-white  text-white hover:text-tb  w-3/5 h-full ">
                <img src={require(`./Images/Books/${li.img}.jpg`)} className="md:w-[210px] md:h-[314px]  " alt=""/>
               
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

export default Books