// import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ContextApi } from '../App';

const PrivetRoute = ({ childern }) => {
    const location = useLocation()
    const [userLogin, setUserLogin] = useContext(ContextApi);
    return (

        sessionStorage.getItem('username') ? childern : <Navigate to="/singin" replace state={{ from: location }} />

    );
};

export default PrivetRoute;