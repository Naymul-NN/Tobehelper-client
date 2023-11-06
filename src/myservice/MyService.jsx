import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";

const MyService = () => {
    const {user}= useContext(AuthContext);
    const [myservice,setMyservice] = useState([]);
    // console.log(myservice)
    useEffect(()=>{
          fetch(`http://localhost:5000/providerservice?email=${user?.email}`)
          .then(res=>res.json())
          .then(data=>{
              setMyservice(data)
              console.log(data)
          })
       },[user?.email])

    return (
        <div>
            <h1 className="pt-10 font-bold text-center">here you can see your added service: {myservice.info}</h1>
        </div>
    );
};

export default MyService;