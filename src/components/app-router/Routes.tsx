import {
    ADMIN_PAGE_ROUTE,
    LOGIN_PAGE_ROUTE,
    MAIN_PAGE_ROUTE,
    MARK_PAGE_ROUTE,
    VIEW_PAGE_ROUTE
} from "../../utils/routesName";
import MainPage from "../../pages/MainPage";
import ViewPage from "../../pages/ViewPage";
import MarkPage from "../../pages/MarkPage";
import AdminPage from "../../pages/AdminPage";
import LoginPage from "../../pages/LoginPage";
import {userRoles} from "../../utils/roles";

export const publicRoutes = [
    {
        path: LOGIN_PAGE_ROUTE,
        Component: LoginPage
    }
]
export const privateRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage,
        allowedRoles: userRoles.all
    },
    {
        path: VIEW_PAGE_ROUTE,
        Component: ViewPage,
        allowedRoles: userRoles.researcher
    },
    {
        path: MARK_PAGE_ROUTE,
        Component: MarkPage,
        allowedRoles: userRoles.expert
    },
    {
        path: ADMIN_PAGE_ROUTE,
        Component: AdminPage,
        allowedRoles: userRoles.admin
    },

]
