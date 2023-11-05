
const Banner = () => {
    return (
        <div >
            <div  className="carousel-item relative w-11/12 mx-auto h-[600px]  ">
    <img src='https://i.ibb.co/hYVNkVv/home-services.jpg' className=" w-full rounded-xl" />
     <div className='absolute  rounded-lg pl-20 h-full bg-gradient-to-r from-[#15151557] to-[rgba(21, 21, 21, 0.00)] w-full '>
     <div className=' space-y-5 pt-32'>
     <h1 className='text-5xl text-white font-bold '> We fix any <br/> <span className='py-10 text-pink-200'> type of  problem </span> <br /> of your House</h1>
      <p className='text-white'>there are so many dedicated service provider <br /> in home service they are  ready to help you</p>
      
     </div>
     </div>
   
    </div> 
        </div>
    );
};

export default Banner;