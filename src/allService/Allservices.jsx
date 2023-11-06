import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Allservices = () => {
    const [searchQuery, setSearchQuery] = useState(""); // State for the search input
    const [showAll, setShowAll] = useState(false); // State to track whether to show all data


    const getdata = async()=>{
        const res = await axios.get('http://localhost:5000/allServices')
        return res
    }
    const {data, isLoading,}= useQuery({
        queryKey: ['displaydata'],
        queryFn: getdata ,
    })
    if(isLoading){
      return  <span className="loading loading-spinner loading-lg"></span>
    }

    const filteredData = data?.data?.filter((item) =>
    item.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const visibleData = showAll ? filteredData : filteredData.slice(0, 3);

    // console.log(data,isFetching)
    return (
        <div>
            <h1 className="pt-10 text-center">here you can see: {filteredData?.length } data</h1>

            <div className=" w-auto mx-auto text-center my-5">
              <input
               type="text" 
               placeholder="search here by name"
               className="input input-bordered w-3/5  pr-16"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
           /> 
           <button
          className="btn btn-primary top-0 right-0 rounded-l-none"
          onClick={() => setSearchQuery("")}
            >
          Clear
        </button>
           </div>
            <div className="flex flex-col gap-7 justify-center items-center">
                {
                  showAll ?  filteredData.map(item =>(
                        <div key={item._id}>
                         <div className="card w-[800px] bg-base-100 shadow-xl">
                         <figure className="h-[400px] w-[800px]"><img className="h-full w-full object-cover" src={item.serviceImage} alt="Shoes" /></figure>
                         <div className="card-body">
                          <h2 className="card-title">Service Name : { item.serviceName}</h2>
                          <p>About : {item.serviceDescription}</p>
                          <p>Service Area: {item.serviceArea}</p>
                          <p>Price :{ item.servicePrice}</p>
                          <div className="card-actions">
                          <Link to={`/seeAllDetails/${item._id}`}> <button className="btn "> See details</button></Link>
                           </div>

                           <div>
                            <h1 className="font-bold py-3">About service provider</h1>
                            <div className="flex items-center justify-between">
                                <div >
                                <div className="avatar">
                                 <div className="w-24 rounded-full">
                                 <img src={item.serviceProviderImage} />
                                   </div>
                                    </div>
                                </div>
                                <div>
                                   <p>Name: {item.serviceProviderName}</p>
                                </div>
                            </div>
                         </div>

                         </div>
                          </div>
                          </div>
                    )) : visibleData.map((item) => (
                        <div key={item._id}>
                         <div className="card w-[800px] bg-base-100 shadow-xl">
                         <figure className="h-[400px] w-[800px]"><img className="h-full w-full object-cover" src={item.serviceImage} alt="Shoes" /></figure>
                         <div className="card-body">
                          <h2 className="card-title">Service Name : { item.serviceName}</h2>
                          <p>About : {item.serviceDescription}</p>
                          <p>Service Area: {item.serviceArea}</p>
                          <p>Price :{ item.servicePrice}</p>
                          <div className="card-actions">
                          <Link to={`/seeAllDetails/${item._id}`}> <button className="btn "> See details</button></Link>
                           </div>

                           <div>
                            <h1 className="font-bold py-3">About service provider</h1>
                            <div className="flex items-center justify-between">
                                <div >
                                <div className="avatar">
                                 <div className="w-24 rounded-full">
                                 <img src={item.serviceProviderImage} />
                                   </div>
                                    </div>
                                </div>
                                <div>
                                   <p>Name: {item.serviceProviderName}</p>
                                </div>
                            </div>
                         </div>

                         </div>
                          </div>
                          </div>
                    ))
                }

                    {filteredData.length > 3 && (
                     <button
                     className="btn btn-primary"
                     onClick={() => setShowAll(!showAll)}
                     >
                    {showAll ? "See Less" : "Show All"}
                    </button>
                     )}

                   </div>
                   </div>
          );
};

export default Allservices;