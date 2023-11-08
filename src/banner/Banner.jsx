import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "../App.css"
const Banner = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div >
            {/* <div  className="carousel-item relative w-11/12 mx-auto h-[600px]  ">
    <img src='https://i.ibb.co/hYVNkVv/home-services.jpg' className=" w-full rounded-xl" />
     <div className='absolute  rounded-lg pl-20 h-full bg-gradient-to-r from-[#15151557] to-[rgba(21, 21, 21, 0.00)] w-full '>
     <div className=' space-y-5 pt-32'>
     <h1 className='text-5xl text-white font-bold '> We fix any <br/> <span className='py-10 text-pink-200'> type of  problem </span> <br /> of your House</h1>
      <p className='text-white'>there are so many dedicated service provider <br /> in home service they are  ready to help you</p>
      
     </div>
     </div>
   
    </div>  */}
       <div style={{ width: "auto", height: "400px", }}>
       <div id="particle-container" className="particle-container mb-20 " style={{ height:"400px" ,marginTop:"50px",  }}>
            
            <h1 className="relative z-10 text-white text-3xl text-center font-bold pt-20" >We fix any <br/><span className="text-pink-400">any type of  problem</span>   <br /> of your House</h1>
            <Particles
            
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#202242",
                    },
                },
                style:{
                    position: "absolute"
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.2,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        </div>

       </div>

        </div>
    );
};

export default Banner;