import React from 'react'
import Coin from './Components/Coin'
import History from './Components/History'
import Infor from './Components/Infor'
import Menu from './Components/Menu'
import MyCourse from './Components/MyCourse'
import MyProject from './Components/MyProject'
import {
    Route,
    Switch
} from 'react-router-dom'
import { useLogin } from '../../core/hook/useLogin'

export default function Profile() {

    let auth = useLogin();

    return (
        <div>
            <main className="profile" id="main">
                <section>
                    <div className="top-info">
                        <div className="avatar">
                            {/* <span class="text">H</span> */}
                            <img src="img/avatar-lg.png" alt="" />
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
                                    <Route path="/thong-tin-ca-nhan/khoa-hoc-cua-toi"><MyCourse /></Route>
                                    <Route path="/thong-tin-ca-nhan/du-an-cua-toi"><MyProject /></Route>
                                    <Route path="/thong-tin-ca-nhan/lich-su-thanh-toan"><History /></Route>
                                    <Route path="/thong-tin-ca-nhan/quan-li-coin"><Coin /></Route>
                                    <Route path="/thong-tin-ca-nhan"><Infor /></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
