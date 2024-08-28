import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, Navigate } from "react-router-dom";

const restAuth = axios.create(
    {
        baseURL: "http://localhost:4000",
    },
    () => {
        console.log("ok");
    }
);

restAuth.interceptors.request.use(
    async (config) => {
        if (!Cookies.get().sign) {
            <Navigate to="/login" />;
        }
        const currentDate = new Date();
        if (!Cookies.get().exp || Cookies.get().exp * 1000 < currentDate.getTime()) {
            const response = await axios.post("http://localhost:4000/token", {}, { withCredentials: true });
        }
        return config;
    },
    (error) => {
        if (error.response) {
            return <Navigate to="/login" />;
        }
        return Promise.reject(error);
    }
);

const restNoAuth = axios.create({
    baseURL: "http://localhost:4000",
});
export { restAuth, restNoAuth };
