import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
			<div style={{display:"flex" , minHeight : "100vh" , justifyContent : "center" , alignItems : "center"}}>
				<div>
                    loading...
                </div>
			</div>
		);
    }
    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to="/login" replace></Navigate>
};

export default PrivateRoute;