import Login from "../components/login/Login.jsx";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Navigate, Link, Outlet } from "react-router-dom";
//hanya dijalankan saat refresh
const Auth = () => {
    const [token, setToken] = useState("");
    useEffect(() => {
        setToken("2");
    }, []);
    console.log("auth ");
    if (Cookies.get().sign && !Cookies.get().exp) {
        console.log("Refresh token dulu Midelware route Auth.jsx");
    }
    if (!Cookies.get().sign) {
        console.log("Belum login!!!");
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

export default Auth;
