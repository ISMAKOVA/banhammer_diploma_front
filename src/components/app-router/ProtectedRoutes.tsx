import React, {useContext, useEffect, useState} from "react";
import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {UserRoles} from "../../utils/roles";
import {getAuth, onAuthStateChanged} from "firebase/auth";
export interface IProtectedRoutesProps {
    allowedRoles: UserRoles
}
const ProtectedRoutes: React.FunctionComponent = (props) => {

    const auth = getAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false);
        }
        else {
            navigate('/login');
            return <Navigate to="/login" state={{from: location}} replace />
        }
    });
    if (loading) return <p>Loading ...</p>;
    return <Outlet />;
}
export default ProtectedRoutes;
