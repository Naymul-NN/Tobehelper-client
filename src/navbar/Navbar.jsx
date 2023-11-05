import { Link, NavLink } from "react-router-dom";
const Navbar = () => {

    const link = <>
    
                 
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/allservices">Services </Link></li>
                    

          </>         

    return (
        <div className="py-10 px-10">
        <div className="navbar bg-base-100 fixed z-50 top-0">
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
          <li><Link>My-services</Link></li>
          <li><Link>Add-services </Link></li>
          <li><Link> My-schedules</Link></li>
          </ul>
        </details>
      </li>

    </ul>
  </div>
  <div className="navbar-end flex lg:flex-row flex-col ">
  <a className="btn mr-24">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;