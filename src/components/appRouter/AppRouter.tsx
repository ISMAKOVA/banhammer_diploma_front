import {Navigate, Outlet, useNavigate, useRoutes} from 'react-router-dom';
import MainPage from "../../pages/MainPage";
import ViewPage from "../../pages/ViewPage";
import MarkPage from "../../pages/MarkPage";
import AdminPage from "../../pages/AdminPage";
import LoginPage from "../../pages/LoginPage";
import React, {useEffect, useState} from "react";
import {MessageTypes} from "../../utils/enums";
import AboutUsPage from "../../pages/AboutUsPage";
import {UserRoles} from "../../utils/roles";
import AddPage from "../../pages/AddPage";
import EditPage from "../../pages/EditPage";
import {getUserRole, UserAuth} from "../../utils/context/AuthContext";

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
                    { path: 'add', element: userRole !== UserRoles.expert ? <AddPage type={MessageTypes.post} /> : <Navigate to="/main" /> },
                    { path: 'edit/:id', element: userRole !== UserRoles.expert ? <EditPage type={MessageTypes.post} /> : <Navigate to="/main" /> },
                ],
            },
            {
                path: 'comment',
                element: <Outlet />,
                children: [
                    { path: 'view', element: <ViewPage type={MessageTypes.comment} /> },
                    { path: 'mark', element: <MarkPage type={MessageTypes.comment} /> },
                    { path: 'add', element: userRole !== UserRoles.expert ? <AddPage type={MessageTypes.post} /> : <Navigate to="/main" /> },
                    { path: 'edit/:id', element: userRole !== UserRoles.expert ? <EditPage type={MessageTypes.post} /> : <Navigate to="/main" /> },
                ],
            },
            {
                path: 'picture',
                element: <Outlet />,
                children: [
                    { path: 'view', element: <ViewPage type={MessageTypes.picture} /> },
                    { path: 'mark', element: <MarkPage type={MessageTypes.picture} /> },
                    { path: 'add', element: userRole !== UserRoles.expert ? <AddPage type={MessageTypes.post} /> : <Navigate to="/main" /> },
                    { path: 'edit/:id', element: userRole !== UserRoles.expert ? <EditPage type={MessageTypes.post} /> : <Navigate to="/main" /> },
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
    const {user} = UserAuth();
    const userRole = getUserRole(user);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const routing = useRoutes(routes(isLoggedIn, userRole));
    useEffect(() => {
        user?.displayName
            ? setIsLoggedIn(true)
            : setIsLoggedIn(false)
    }, [user]);
    return (<>{routing}</>);

}
export default AppRouter;
