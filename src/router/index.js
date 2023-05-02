import React from "react";
import { Navigate } from "react-router-dom";
const Home = React.lazy(() => import('@/views/home'))
const Detail = React.lazy(() => import('@/views/detail'))
const routes = [
    {
        path:"/",
        element:<Navigate to="/home" />
    },
    {
        path:"/home",
        element:<Home />
    },
    {
        path:"/detail",
        element:<Detail />
    }
]
export default routes;