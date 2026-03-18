import React, { Children, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }

    if (!user) {
        <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;