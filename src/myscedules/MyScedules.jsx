import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const MyScedules = () => {
    const {user} = useContext(AuthContext)
 console.log(user)
    const getdata = async()=>{
        const res = await axios.get(`http://localhost:5000/bookingService/${user?.email}`)
        return res.data
    }
    const {data, isLoading,}= useQuery({
        queryKey: (['displaybookingdata', user?.email]),
        queryFn: getdata ,
    })
    
    if(isLoading){
        return  <span className="loading loading-spinner loading-lg"></span>
      }
   console.log(data)
    return (
        <div>
            <div>
                <h1 className="pt-10 text-center font-bold">Here you see your booking</h1>
                <div className="grid grid-cols-2 gap-7 pl-20">
                {
                  data?.length > 0 ?  (  data?.map(service => (
                        <div key={service._id} >
                         <div className="card w-[600px] bg-base-100 shadow-xl">
                         <figure><img className="h-[400px]" src={service.photo} alt="Shoes" /></figure>
                         <div className="card-body">
                         <h2 className="card-title">{service.serviceName}</h2>
                         
                         <p>Price: ${service.ServicePrice} 1/h</p>
                        
                         <div>
                            <h1 className="font-bold py-3">About service provider</h1>
                           
                         </div>
                         
                         </div>
                         </div>
                        </div>
                    ))
                  ) : (
                    <div>
                    <p className=" text-5xl text-center font-bold">there is no booking data <br /> available</p>
                    </div>
                  )
                }
          
                </div>
            </div>
        </div>
    );
};

export default MyScedules;