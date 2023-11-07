import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogout = () => {
    logOut()
   .then(() => {
     toast.success('sign out successful');
    })
   .catch((error) => {
     console.error(error);
   });
   };

    const link = <>          
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/allservices">Services </Link></li>
          </>         

    return (
        <div className="py-10 relative ml-16">
        <div className="navbar  bg-base-100 fixed z-50 top-0 w-[90%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {link}
                  <li>
                    <a>Dashbord</a>
                   <ul className="p-2 w-44">
                   <li><Link>My-services</Link></li>
                    <li><Link>Add-services </Link></li>
                    <li><Link> My-schedules</Link></li>
                   </ul>
                   </li>

      </ul>
    </div>
    <Link className=" normal-case text-xl"><img className=" w-20" src="https://i.ibb.co/7rNbcw7/help-hand-vector-logo-design-icon-app-10135-1521.jpg" alt="" height="70px" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
        <li tabIndex={0}>
        <details>
          <summary>Dashbord</summary>
          <ul className="p-2 w-44">
          <li><Link to="/myservice">My-services</Link></li>
          <li><Link to="/addservice">Add-services </Link></li>
          <li><Link to ="/myscedules">My-schedules</Link></li>
          </ul>
        </details>
      </li>

     </ul>
     </div>
   <div className="navbar-end flex lg:flex-row flex-col gap-24">
  {
    user &&    <div className="w-14  rounded-full">
                <h1 className="pr-2"><span className="font-bold">user:</span>{user.email}</h1>
                <img src={user.photoURL} />
      </div>
  }
   {
      user ?
      <button onClick={handleLogout} className="btn btn-sm btn-primary">log out</button>
      :
      
      <Link to ="/login"><button className="btn  btn-sm btn-primary">log in</button></Link>
    
   }  
  </div>
  </div>
        </div>
    );
};

export default Navbar;