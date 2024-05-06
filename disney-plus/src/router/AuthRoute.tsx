import {useContext} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.tsx";

export default function AuthRoute() {

    const {token} = useContext(AuthContext);
    if (token === '') return <Navigate to="/"/>;

    return (
        <Outlet/>
    )
}