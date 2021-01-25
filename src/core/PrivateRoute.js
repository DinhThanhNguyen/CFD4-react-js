import React, { useContext, useEffect } from 'react'
import { Route } from 'react-router-dom';
import { context } from '../App';
import { useLogin } from './hook/useLogin'

export default function PrivateRoute(props) {
    let auth = useLogin();
    let popupLogin = useContext(context);
    useEffect(() => {
        if(!auth.login){
            popupLogin.openPopupLogin();
        }
    }, [auth.login])


    if(auth.login) return <Route {...props} />
    return <div style={{height: 500, display: 'flex'}}>
        <div style={{margin: 'auto'}}>Bạn chưa đăng nhập để vào trang này</div>
    </div>
}
