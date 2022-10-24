import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function Guard(props) {
    let token = localStorage.getItem("token");
    let path = useLocation().pathname;
    console.log(path);
    if(!token){
        return <Navigate to='/login' state={{pathname:path}} />
    }
    else{
        return props.children;
    }
}

export default Guard;