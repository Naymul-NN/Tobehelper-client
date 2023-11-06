import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyService = () => {
    const {user}= useContext(AuthContext);
    const [myservice,setMyservice] = useState([]);
    console.log(myservice)
    // console.log(myservice)
    useEffect(()=>{
          fetch(`http://localhost:5000/providerservice/${user?.email}`)
          .then(res=>res.json())
          .then(data=>{
              setMyservice(data)
             
          })
       },[user?.email])

       //delete option
       const handledeleteCart = (id) => {
        const confirmToast = toast.custom(() => (
          <div className="bg-zinc-200 p-10 mt-40">
            <h1>Are you sure to delete it?</h1>
            <button
              onClick={() => {               
                proceedWithDeletion();
              }}
            >
              Yes
            </button>
            <button className="ml-4"
              onClick={() => {            
                cancelDeletion();
              }}
            >
              No
            </button>
          </div>
        ));
        const proceedWithDeletion = () => {
          // Delete the item and update the state
          fetch(`http://localhost:5000/providerservice/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
            console.log(data);
              const dataRemain = myservice.filter((data) => data._id !== id);
              setMyservice(dataRemain);
             
              toast.success('Item deleted successfully', {
                duration: 2000, // Duration in milliseconds
              });
            });
        };
      
        const cancelDeletion = () => {
        
          toast.error('Deletion canceled', {
            duration: 2000, // Duration in milliseconds
          });
        };
      
        confirmToast();
      };
      
    return (
        <div>
            <h1 className="pt-10 font-bold text-center">here you can see your added service </h1>
           <div className="flex flex-col justify-center items-center gap-7">
            {
                myservice.map(item=>(
                    <div key={item._id}>
                        <div className="card   w-[800px] bg-base-100 shadow-xl">
                       <figure className="h-[400px] w-[800px]"><img className="h-full w-full object-cover" src={item?.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                        <h2 className="card-title">serviceName:{item?.serviceName}</h2>
                        <p>price :$ {item?.price} 1/h</p>
                        <div className="card-actions ">
                      <Link to={`/update/${item?._id}`}>  <button className="btn btn-primary">Edit</button></Link>
                        <button onClick={()=>handledeleteCart(item?._id)} className="btn btn-primary">Delete</button>
                        </div>
                         </div>
                        </div>
                     </ div>
                ))
            }
           </div>
        </div>
    );
};

export default MyService;