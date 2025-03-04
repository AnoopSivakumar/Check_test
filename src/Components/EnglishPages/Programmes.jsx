import React, { useState } from 'react';
import { data } from './Data';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css'; 

const Programmes = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const imageClasses = `object-contain ${isFullScreen ? 'fixed top-0 left-0 w-screen h-screen z-50 bg-black' : ''}`;
  const itemsPerPage = 4; 
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  function toggleFullScreen() {
    setIsFullScreen(!isFullScreen);
  }
  return (
    <div className="p-5">
      <div className="relative text-center items-center justify-center">
        <img src={require(`./stroke 1.png`)} alt="example" className="w-80" />
        <h1 className="absolute top-6 left-9 text-white font-bold text-xl">PROGRAMMES</h1>
      </div>
      {currentItems.map((d) => (
        <div className="justify-between mt-4 md:flex p-5 overflow-hidden" key={d.id}>
          <div className="mt-2 border-1 max-w-sm md:max-w-5xl w-full border rounded border-tb p-2" data-aos="fade-right">
            <p className="text-xl font-semibold text-tb mt-4 font-mal">{d.title}</p>
            <p className="text-justify font-mal">{d.des}</p>
          </div>
          <div className="base-1/2 rounded p-2 max-w-sm md:max-w-fit w-[50%]" data-aos="fade-left">
            <img
              className={imageClasses}
              onClick={toggleFullScreen}
              src={require(`./Images/${d.img}.jpg`)}
              alt=""
            />
          </div>
        </div>
      ))}
      <div className="flex justify-center text-tb  items-center mt-8">
  <Pagination
    current={currentPage}
    pageSize={itemsPerPage}
    total={data.length}
    onChange={handlePageChange}
    itemRender={(current, type, originalElement) => {
      
      return originalElement;
    }}
    showSizeChanger={false} 
    showQuickJumper={false} 
    showTitle={false}
    className=" text-tb rounded-full  "
  />
</div>

    </div>
  );
};

export default Programmes;
