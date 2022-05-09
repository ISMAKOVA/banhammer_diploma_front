import React from "react";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Routes";
import ProtectedRoutes from "./ProtectedRoutes";
import NotFoundPage from "../../pages/NotFoundPage";

const AppRouter: React.FunctionComponent = () => {

    return (
        <Routes>
            <Route path="/">
                {
                    publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component/>}/>
                    )
                }
                <Route element={<ProtectedRoutes/>}>
                    {
                        privateRoutes.map(({path, Component}) =>
                            <Route key={path} path={path} element={<Component/>}/>
                        )
                    }
                </Route>
                <Route path="*" element={<NotFoundPage/>} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
