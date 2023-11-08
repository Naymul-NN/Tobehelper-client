import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const Update = () => {
    const updateData = useLoaderData();
    
    console.log(updateData);
    //    update the service
       const handleUpdate =(e)=>{
    e.preventDefault();
    const form = e.target;
    const serviceName =form.name.value;
    const Pname =form.Pname.value;
    const providerEmail=form.providerEmail.value;
    const price =form.price.value;
    const date =form.date.value;
    const info =form.info.value;
    const photo =form.photo.value;
    const updateInfo = {serviceName,Pname,providerEmail,price,date,info,photo}
    console.log(updateInfo)
    fetch(`https://tobehelper-server-site.vercel.app/providerServiceOne/${updateData._id}`,{
        method:'PUT',
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(updateInfo)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount > 0){
            toast.success('product update successfull')
        }
    })

    }

    return (
        <div>
            <h1 className="pt-10 text-center text-green-400 font-bold">Here you can Update your service</h1>
            <div className="py-7 px-16 bg-amber-100">
            <form onSubmit={handleUpdate}>
                    {/* row of input */}
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">ServiceName</span>
                   </label>
                     <label className="input-group">
                 <span>name</span>
                 <input type="text" defaultValue={updateData.serviceName} name="name" placeholder="add service name"
                 className="input input-bordered w-full"  />
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">your name</span>
                   </label>
                     <label className="input-group">
                 <span>name</span>
                 <input type="text" defaultValue={updateData.Pname} name="Pname" 
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
                 <input type="text" defaultValue={updateData.providerEmail} name="providerEmail" className="input input-bordered w-full" readOnly/>
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Price</span>
                   </label>
                     <label className="input-group">
                 <span>$USD</span>
                 <input type="text" defaultValue={updateData.price} placeholder="price" name="price" className="input input-bordered w-full" />
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
                 <input type="text" defaultValue={updateData.info} placeholder="add info" name="info" className="input input-bordered w-full" />
                 </label>
                 </div>
                    </div>
                   
                    <div className="form-control w-full">
                   <label className="label">
                   <span className="label-text">Photo url</span>
                   </label>
                     <label className="input-group">
                 <span>photo</span>
                 <input type="text" defaultValue={updateData.photo} placeholder="give service photourl" name="photo" className="input input-bordered w-full"  />
                 </label>
                 </div>

                <input type="submit" value=" Update Service" className="btn mx-auto justify-center items-center flex mt-6 w-1/2" id="" />
                </form>
            </div>
        </div>
    );
};

export default Update;