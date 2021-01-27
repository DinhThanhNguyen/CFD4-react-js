import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { context } from '../App'
import { useLogin } from '../core/hook/useLogin'
let $ = window.$
export default function Header() {

    useEffect(() => {
        $('body').on('click', function () {
            $('.select.active .sub').fadeOut(200);
            $('.select sub').fadeOut(200);
        })

        $('.menu-hambeger').on('click', function () {
            $('body').toggleClass('menu-is-show');
        });

        $('#header nav ul').on('click', function (e) {
            e.stopPropagation();
        })
        $('.overlay_nav').on('click', function (e) {
            $('body').removeClass('menu-is-show');
        });

        $(document).keyup(function (e) {
            if (e.key === "Escape") {
                $('body').removeClass('menu-is-show');
            }
        })
    }, [])

    let history = useHistory();

    function delayLink(e) {
        e.preventDefault();
        let pageLoading = document.querySelector('.pageLoading');
        let div = pageLoading.querySelector('.loading');


        let scale = Math.sqrt(Math.pow(window.outerHeight, 2) + Math.pow(window.outerWidth, 2)) / 100 * 2;

        div.style.transform = `translate(-50%, -50%) scale(${scale})`;
        div.style.left = `${e.clientX}px`;
        div.style.top = `${e.clientY}px`;
        setTimeout(() => {
            history.push(e.target.href?.replace(window.location.origin, '') || '/');
            $('.overlay_nav').trigger('click');
        }, 300)
        setTimeout(() => {
            div.style.transform = 'translate(-50%, -50%) scale(0)';
        }, 600)
    }


    let contextLogin = useContext(context)
    let auth = useLogin();

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
                    <Link to="/" onClick={delayLink} className="logo">
                        <img src="img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        {
                            auth.login ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                            <div className="name">{auth.login.name}</div>
                                            <div className="avatar">
                                                <img src="img/avt.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger">
                                    </div>
                                    <div className="sub">
                                        <Link to="/thong-tin-ca-nhan" onClick={delayLink} >Thông tin tài khoản</Link>
                                        <Link to="/thong-tin-ca-nhan/khoa-hoc-cua-toi" onClick={delayLink} >Khóa học của tôi</Link>
                                        <Link to="/" onClick={auth.logOut}>Đăng xuất</Link>
                                    </div>
                                </div>
                            ) :
                                <div class="not-login bg-none">
                                    <a href="#" class="btn-register" onClick={contextLogin.openPopupLogin}>Đăng nhập</a>
                                    <a href="#" class="btn main btn-open-login" onClick={contextLogin.openPopupRegister} >Đăng ký</a>
                                </div>
                        }

                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng ký / Đăng nhập</a>
                    </li>
                    <li className="active">
                        <Link to="/" onClick={delayLink} >Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/team" onClick={delayLink} >CFD Team</Link>
                    </li>
                    <li>
                        <Link to="/khoa-hoc" onClick={delayLink} >Khóa Học</Link>
                    </li>
                    <li>
                        <Link to="/thong-tin-ca-nhan/du-an" onClick={delayLink} >Dự Án</Link>
                    </li>
                    <li>
                        <Link to="hop-tac" onClick={delayLink} >Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
        </>
    )
}
