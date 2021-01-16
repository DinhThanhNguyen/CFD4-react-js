import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo">
                        <img src="img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        <div className="have-login">
                            <div className="account">
                                <a href="#" className="info">
                                    <div className="name">Trần Lê Trọng Nghĩa</div>
                                    <div className="avatar">
                                        <img src="img/avt.png" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <Link to="khoa-hoc">Khóa học của tôi</Link>
                                <Link to="thong-tin-ca-nhan">Thông tin tài khoản</Link>
                                <a href="#">Đăng xuất</a>
                            </div>
                        </div>
                        {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng ký / Đăng nhập</a>
                    </li>
                    <li className="active">
                        <a href="#">Trang chủ</a>
                    </li>
                    <li>
                        <a href="#">CFD Team</a>
                    </li>
                    <li>
                        <a href="#">Khóa Học</a>
                    </li>
                    <li>
                        <a href="#">Dự Án</a>
                    </li>
                    <li>
                        <a href="#">Liên hệ</a>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
        </>
    )
}
