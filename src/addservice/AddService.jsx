import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

      
const AddService = () => {
    const {user} = useContext(AuthContext)
    const handleaddService = (e) =>{
        e.preventDefault();
        const form = e.target;
        const serviceName =form.name.value;
        const Pname =form.Pname.value;
        const providerEmail=form.providerEmail.value;
        const price =form.price.value;
        const date =form.date.value;
        const info =form.info.value;
        const photo =form.photo.value;
      const providerInfo = {serviceName,Pname,providerEmail,price,date,info,photo}
      console.log(providerInfo)

      axios.post('https://tobehelper-server-site.vercel.app/providerservice', providerInfo, {
    headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    console.log(response.data);
    if (response.data.insertedId) {
      toast.success("Congratulations! Your service was added successfully.");    
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
    }

   
    return (
        <div>
            <h1 className="pt-10 text-center font-bold">here you can your service</h1>
            <div className="py-7 px-16">
            <form  onSubmit={handleaddService}>
                    {/* row of input */}
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">ServiceName</span>
                   </label>
                     <label className="input-group">
                 <span>name</span>
                 <input type="text"  name="name" placeholder="add service name"
                 className="input input-bordered w-full"  />
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">your name</span>
                   </label>
                     <label className="input-group">
                 <span>name</span>
                 <input type="text" defaultValue={user?.displayName} name="Pname" 
                 className="input input-bordered w-full" readOnly />
                 </label>
                 </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Your email</span>
                   </label>
                     <label className="input-group">
                 <span>email</span>
                 <input type="text" defaultValue={user?.email} name="providerEmail" className="input input-bordered w-full" readOnly/>
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Price</span>
                   </label>
                     <label className="input-group">
                 <span>$USD</span>
                 <input type="text" placeholder="price" name="price" className="input input-bordered w-full" />
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
                 <input type="text" placeholder="add info" name="info" className="input input-bordered w-full" />
                 </label>
                 </div>
                    </div>
                   
                    <div className="form-control w-full">
                   <label className="label">
                   <span className="label-text">Photo url</span>
                   </label>
                     <label className="input-group">
                 <span>photo</span>
                 <input type="text" placeholder="give service photourl" name="photo" className="input input-bordered w-full"  />
                 </label>
                 </div>

                <input type="submit" value=" Add Service" className="btn btn-block mt-6" id="" />
                </form>
            </div>
        </div>
    );
};

export default AddService;