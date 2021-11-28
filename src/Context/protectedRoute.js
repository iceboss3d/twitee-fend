import { useLocation, Navigate } from "react-router-dom";
import {useAuth} from "./authContext";

function ProtectedRoute({children}){
    let auth = useAuth();
    let location = useLocation();
    console.log(auth);

    if(!auth.user){
        return <Navigate to="/auth/login" state={{ from: location }}/>;
    }
    return children;
}

export default ProtectedRoute;