import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const SeeAllDetails = () => {
    const [bookedServices, setBookedServices] = useState([]);

    const {user} =useContext(AuthContext)
    const seeDetails = useLoaderData();
    const handleBook = (e) =>{
        e.preventDefault();
        const form = e.target;
        const serviceName =form.name.value;
        const Pname =form.Pname.value;
        const userEmail=form.userEmail.value;
        const price =form.price.value;
        const date =form.date.value;
        const info =form.info.value;
        const photo =form.photo.value;
      const bookInfo = {serviceName,Pname,userEmail,price,date,info,photo}
      console.log(bookInfo)

      if (bookedServices.some((booking) => booking.serviceName === serviceName && booking.userEmail === userEmail)) {
        toast.error("You have already booked this service.");
        return; // Do not proceed with the POST request.
      }

      axios.post('https://tobehelper-server-site.vercel.app/bookingService', bookInfo, {
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    console.log(response.data);
    if (response.data.insertedId) {
      toast.success("Congratulations! Your product was added successfully.");
      setBookedServices([...bookedServices, bookInfo]);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
    }

    console.log(seeDetails);
    return (
        <div>
            <h2 className="pt-10 text-center font-bold">here you see all details :{seeDetails?.serviceName}</h2>

            <div className="w-2/4 mx-auto text-left space-y-3 ">
                <h1 className="text-2xl font-bold">About service provider</h1>
                <h1>Name: {seeDetails?.serviceProviderName}</h1>
                 <p>Location:{seeDetails?.servicePl}</p>
                 <p>Description:{seeDetails?.aboutSP}</p>
            </div>

            <div className="flex justify-center items-center py-7">
            <div className="card card-compact w-[800px] bg-base-100 shadow-xl">
             <figure className="h-[400px] w-[800px]"><img className="h-full w-full object-cover" src={seeDetails?.serviceImage} alt="Shoes" /></figure>
             <div className="card-body">
             <h2 className="card-title">ServiceName : {seeDetails?.serviceName}</h2>
             <p>{seeDetails?.ServiceDescription}</p>
             <p>Price: ${seeDetails?.servicePrice} 1/h </p>
             
             <div className="card-actions ">
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="btn">Book now</label>

            {/* Put this part before </body> tag */}
           <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal ">
            <div className="modal-box w-[800px]">
            <div>
                <form  onSubmit={handleBook}>
                    {/* row of input */}
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">ServiceName</span>
                   </label>
                     <label className="input-group">
                 <span>name</span>
                 <input type="text"  name="name" defaultValue={seeDetails?.serviceName} 
                 className="input input-bordered w-full" readOnly />
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Provider</span>
                   </label>
                     <label className="input-group">
                 <span>name</span>
                 <input type="text" defaultValue={seeDetails?.serviceProviderName} name="Pname" 
                 className="input input-bordered w-full" readOnly />
                 </label>
                 </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">User email</span>
                   </label>
                     <label className="input-group">
                 <span>user</span>
                 <input type="text" defaultValue={user?.email} name="userEmail" className="input input-bordered w-full" readOnly/>
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Price</span>
                   </label>
                     <label className="input-group">
                 <span>$USD</span>
                 <input type="text" defaultValue={seeDetails?.servicePrice} name="price" className="input input-bordered w-full" readOnly />
                 </label>
                 </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">service taking date</span>
                   </label>
                     <label className="input-group">
                 <span>date</span>
                 <input type="date" placeholder="give a data " name="date" className="input input-bordered w-full" />
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Instruction</span>
                   </label>
                     <label className="input-group">
                 <span>info</span>
                 <input type="text" placeholder="Address" name="info" className="input input-bordered w-full" />
                 </label>
                 </div>
                    </div>
                   
                    <div className="form-control w-full">
                   <label className="label">
                   <span className="label-text">Photo url</span>
                   </label>
                     <label className="input-group">
                 <span>photo</span>
                 <input type="text" defaultValue={seeDetails?.serviceImage} name="photo" className="input input-bordered w-full" readOnly />
                 </label>
                 </div>

                <input type="submit" value="Purchase" className="btn btn-block mt-6" id="" />
                </form>
            </div>
            <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">close</label>
             </div>
            </div>
            </div>
           </div>

           <div>
                            <h1 className="font-bold py-3">About service provider</h1>
                            <div className="flex items-center justify-between">
                                <div >
                                <div className="avatar">
                                 <div className="w-24 rounded-full">
                                 <img src={seeDetails?.serviceProviderImage} />
                                seeDetails?
                                    </div>
                                </div>
                                <div>
                                   <p>Name: {seeDetails?.serviceProviderName}</p>
                                </div>
                            </div>
                         </div>
           
           </div>
           </div>
            </div>
        </div>
      </div>
    );
};

export default SeeAllDetails;