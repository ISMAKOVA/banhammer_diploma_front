import React, {useContext} from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {UserRoles} from "../../utils/roles";
// import {Context} from "../../index";
export interface IProtectedRoutesProps {
    allowedRoles: UserRoles
}
const ProtectedRoutes: React.FunctionComponent = (props) => {

    const isAuth = true;
    const location = useLocation();

    return isAuth
        ? <Outlet />
        : <Navigate to="/login" state={{from: location}} replace />
}
export default ProtectedRoutes;
