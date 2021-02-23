import React, { useState, useEffect, useRef } from 'react'
import Coin from './Components/Coin'
import History from './Components/History'
import Infor from './Components/Infor'
import Menu from './Components/Menu'
import MyCourse from './Components/MyCourse'
import MyProject from './Components/MyProject'
import {
    Redirect,
    Route,
    Switch,
    useRouteMatch
} from 'react-router-dom'
import { useLogin } from '../../core/hook/useLogin'
import UserApi from '../../api/UserApi'





const styles = {
    inputFile: {
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        zIndex: 100,
        cursor: 'pointer'
    }
}


export default function Profile() {

    let auth = useLogin();
    let login = true;
    let { path } = useRouteMatch();
    let avatarRef = useRef();

    if (!login) return <Redirect to="/"></Redirect>

    function dataChange(e) {
        if (e.currentTarget.files[0]) {
            let formData = new FormData();
            formData.append('avatar', e.currentTarget.files[0])


            UserApi.updateAvatar(formData)
                .then(res => {
                    if (res.data) {
                        auth.activeLogin(res.data)
                    }
                })
        }
    }
    return (
        <div>
            <main className="profile" id="main">
                <section>
                    <div className="top-info">
                        <div className="avatar">
                            <img src={auth.login.avatar?.link || "/img/avatar-default.png"} alt="" />
                            <input type="file" style={{ display: 'none' }} style={styles.inputFile} ref={avatarRef} onChange={dataChange} />
                            <div className="camera" />
                        </div>
                        <div className="name">{auth.login.name}</div>
                        <p className="des">Thành viên của team CFD1-OFFLINE</p>
                    </div>
                    <div className="container">
                        <div className="tab">
                            <Menu />
                            <div className="tab-content">
                                <Switch>
                                    <Route path={`${path}/khoa-hoc-cua-toi`}><MyCourse /></Route>
                                    <Route path={`${path}/du-an-cua-toi`}><MyProject /></Route>
                                    <Route path={`${path}/lich-su-thanh-toan`}><History /> </Route>
                                    <Route path={`${path}/quan-li-coin`}><Coin /> </Route>
                                    <Route><Infor /></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}


class Profile2 extends React.Component {

}
