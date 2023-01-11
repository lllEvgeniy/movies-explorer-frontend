import React from 'react';
import { useLocation, Navigate } from "react-router-dom";


const ProtectedRoute = ({ component, ...props }) => {
    const location = useLocation()
    if (!props.loggedIn) {
        return <Navigate to="/" state={{ from: location }} />
    }
    return component
};

export default ProtectedRoute;