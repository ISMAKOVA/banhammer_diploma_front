import {Navigate, Outlet, useNavigate, useRoutes} from 'react-router-dom';
import MainPage from "../../pages/MainPage";
import ViewPage from "../../pages/ViewPage";
import MarkPage from "../../pages/MarkPage";
import AdminPage from "../../pages/AdminPage";
import UnauthorisedPage from "../../pages/UnauthorisedPage";
import LoginPage from "../../pages/LoginPage";
import React, {useContext, useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {MessageTypes} from "../../utils/enums";
import AboutUsPage from "../../pages/AboutUsPage";
import {UserRoles} from "../../utils/roles";
// import {AuthContext, AuthContextProvider} from "../../services/firebase";

const routes = (isLoggedIn: boolean, userRole: UserRoles) => [
    {
        path: '/',
        element: isLoggedIn ? <Outlet /> : <Navigate to="/login" />,
        children: [
            {
                path: 'post',
                element: <Outlet />,
                children: [
                    { path: 'view', element: <ViewPage type={MessageTypes.post} /> },
                    { path: 'mark', element: <MarkPage type={MessageTypes.post} /> },
                ],
            },
            {
                path: 'comment',
                element: <Outlet />,
                children: [
                    { path: 'view', element: <ViewPage type={MessageTypes.comment} /> },
                    { path: 'mark', element: <MarkPage type={MessageTypes.comment} /> },
                ],
            },
            {
                path: 'picture',
                element: <Outlet />,
                children: [
                    { path: 'view', element: <ViewPage type={MessageTypes.picture} /> },
                    { path: 'mark', element: <MarkPage type={MessageTypes.picture} /> },
                ],
            },
            { path: "admin", element: <AdminPage /> }
        ],
    },
    { path: '/main', element: <MainPage /> },
    { path: '/about', element: <AboutUsPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/*', element:  isLoggedIn ? <Navigate to="/main" />  : <Navigate to="/login" /> },

];

const AppRouter: React.FunctionComponent = () => {
    const auth = getAuth();
    const userRole = UserRoles.expert;
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();
    const routing = useRoutes(routes(isLoggedIn, userRole));
    // useEffect(() => {
    //     const AuthCheck = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setIsLoggedIn(true);
    //         } else {
    //             setIsLoggedIn(false);
    //         }
    //     });
    //
    //     return () => AuthCheck();
    // }, [auth]);

    return (<>{routing}</>);

}
export default AppRouter;
