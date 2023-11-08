import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 className=" text-center text-4xl font-bold">opps! there is no page</h1>
            <Link to="/"></Link>
        </div>
    );
};

export default Error;