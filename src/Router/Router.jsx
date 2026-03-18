import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Donation from "../Pages/Donation/Donation";
import Projects from "../Pages/Projects/Projects";
import Service from "../Pages/Service/Service";
import LogIn from "../Auth/LogIn/LogIn";
import SignUp from "../Auth/SignUp/SignUp";
import RequestService from "../Pages/RequestService/RequestService";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayouts,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/About",
                Component: About,
            },
            {
                path: "/Contact",
                Component: Contact,
            },
            {
                path: "/Donation",
                Component: Donation,
            },
            {
                path: "/Projects",
                Component: Projects,
            },
            {
                path: "/Service",
                Component: Service,
            }
            ,
            {
                path: "/Login",
                Component: LogIn,
            }
            ,
            {
                path: "/SignUp",
                Component: SignUp,
            }
            ,
            {
                // 2. Add the dynamic RequestService path
                path: "/request-service",
                Component: RequestService,
            },
        ]
    },
]);