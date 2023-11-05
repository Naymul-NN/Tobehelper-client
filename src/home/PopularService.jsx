import { useEffect, useState } from "react";

const PopularService = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/homeservice')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services)
    return (
        <div>
            <h1 className="text-center py-7 text-3xl font-bold">Popular Services : {services.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-20 gap-5">
                {
                    services.map(service => (
                        <div key={service._id}>
                         <div className="card w-[600px] bg-base-100 shadow-xl">
                         <figure><img src={service.ServiceImage} alt="Shoes" /></figure>
                         <div className="card-body">
                         <h2 className="card-title">{service.ServiceName}</h2>
                         <p>{service.ServiceDescription}</p>
                         <p>Price: ${service.ServicePrice} 1/h</p>
                         <div className="card-actions ">
                         <button className="btn "> See details</button>
                         </div>
                         <div>
                            <h1>About service provider</h1>
                            <div className="flex items-center justify-between">
                                <div >
                                <div className="avatar">
                                 <div className="w-24 rounded-full">
                                 <img src={service.ServiceProviderImage} />
                                   </div>
                                    </div>
                                </div>
                                <div>
                                   <p>Name: {service.ServiceProviderName}</p>
                                </div>
                            </div>
                         </div>
                         
                         </div>
                         </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default PopularService;