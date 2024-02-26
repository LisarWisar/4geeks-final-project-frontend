import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoutes = () => {
    let auth = {"token": true}
    return(
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}