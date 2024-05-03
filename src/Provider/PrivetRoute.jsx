import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="w-full flex justify-center"><progress className="progress w-56 "></progress></div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' replace></Navigate>

};

export default PrivetRoute;