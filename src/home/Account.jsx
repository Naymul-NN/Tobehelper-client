import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const Account = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <div className="hero  bg-indigo-200 my-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-[600px] shadow-2xl bg-pink-100">
      <form className="card-body">
      <h1 className="text-2xl font-bold">create your account here</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} className="input input-bordered" readOnly />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} className="input input-bordered" readOnly/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">select a service</span>
          </label>
          <select 
          name="service"
          className="select select-info w-full">
            <option disabled selected>Select a service</option>
             <option>clean-home</option>
             <option>painting</option>
             <option>car-wash</option>
             <option>garden-clean</option>
            </select>
         </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">select a area</span>
          </label>
          <select 
          name="service"
          className="select select-info w-full">
            <option disabled selected>Select a area</option>
             <option>a</option>
             <option>b</option>
             <option>c</option>
             <option>d</option>
            </select>
         </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">create account</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Account;