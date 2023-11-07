import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const BeAprovider = () => {
    const word = 'Earn money your way, Flexible work, at your fingertips,Be your own boss .'
   
    
    return (
       <div className=" bg-indigo-200 my-10 rounded-xl">
         <div className="py-7 text-4xl text-center font-bold">
      <Typewriter 
        words={[word]}
        cursor
        loop={0}
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={0}
      />
        </div>
        <div>
            <h1 className="text-center text-2xl font-bold">Be a service provider</h1>
            <p className="text-center py-5 font-bold">when you click on join button then you see a from you should fill up the from and your engin save you <br />
             as a service provider but you have to pay a fee to be a service provide </p>
            <div className="flex justify-center items-center pb-5"><Link to="/account"><button className="btn px-7 py-3 bg-pink-300">join</button></Link></div>
        </div>
       </div>
    );
};

export default BeAprovider;