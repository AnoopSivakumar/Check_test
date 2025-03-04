import React from 'react'
import {video} from './Data'
const Video = () => {
  return (
    <div>
      <div className=''>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className={`absolute top-5 left-20 text-white font-bold text-[25px] `}>VIDEO</h1>
    </div>
    </div>

    <div className='max-w-screen-lg mx-auto text-justify mt-10 text-xl'>

    <div className='grid gap-4 md:grid-cols-3'>


    <div className="max-w-lg rounded-lg overflow-hidden shadow-md  ">
      <div className="relative h-0" style={{ paddingTop: "56.25%" }}>
      <img  src={require(`./Images/ayyappapanikar.png`)} 
      alt=""
      className="absolute inset-0 w-full h-full"></img>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-tb text-center"><a href={`https://www.youtube.com/channel/UCQhefzg-u2lo7-MfMsSm1Yg/videos`}>Ayyappapaniker Foundation</a></h2>
        
      </div>
    </div>

    {
    video.map((data)=>(
      <div className="max-w-lg rounded-lg overflow-hidden shadow-md  ">
      <div className="relative h-0" style={{ paddingTop: "56.25%" }}>
      <iframe  src={`https://www.youtube.com/embed/${data.vid}`} 
      title="കാലത്തെ ജയിച്ച കവി ജീവിതം ; ഡോ കെ അയ്യപ്പപണിക്കര്‍ക്ക് നവതി  | Ayyappa Paniker" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen
      className="absolute inset-0 w-full h-full"></iframe>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-tb text-center"><a href={`${data.url}`}>{data.title}</a></h2>
        
      </div>
    </div>
    ))
    }




    </div>




    </div>



    </div>
  )
}

export default Video


