import React from 'react'
import {
    NavLink, useLocation, useRouteMatch
} from 'react-router-dom';

export default function Menu() {

    let url = useLocation();

    let { path } = useRouteMatch();


    return (
        <div className="tab-title">
            <NavLink to={`${path}`} exact>Thông tin tài khoản</NavLink>
            <NavLink to={`${path}/khoa-hoc-cua-toi`}>Khóa học của bạn</NavLink>
            <NavLink to={`${path}/du-an-cua-toi`}>Dự án đã làm</NavLink>
            <NavLink to={`${path}/lich-su-thanh-toan`}>Lịch sử thanh toán</NavLink>
            <NavLink to={`${path}/quan-li-coin`}>Quản lý COIN của tôi</NavLink>
        </div>
    )
}
