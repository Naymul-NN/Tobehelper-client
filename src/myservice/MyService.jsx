import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import toast from "react-hot-toast";

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
        // Display a toast for confirmation
        const confirmToast = toast.custom(() => (
          <div className="bg-zinc-200 p-10 mt-40">
            <h1>Are you sure to delete it?</h1>
            <button
              onClick={() => {
                //  t.dismiss();
                proceedWithDeletion();
              }}
            >
              Yes
            </button>
            <button className="ml-4"
              onClick={() => {
                // t.dismiss();
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
              // Show a success toast after successful deletion
              toast.success('Item deleted successfully', {
                duration: 3000, // Duration in milliseconds
              });
            });
        };
      
        const cancelDeletion = () => {
          // Show a warning toast for cancellation
          toast.error('Deletion canceled', {
            duration: 3000, // Duration in milliseconds
          });
        };
      
        // Show the custom confirmation toast
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
                        <button className="btn btn-primary">Edit</button>
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