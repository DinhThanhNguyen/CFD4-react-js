import React from 'react'
import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Header() {

    let $ = window.$
    useEffect( () => {
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

    function delayLink(e){
        e.preventDefault();
        let pageLoading = document.querySelector('.pageLoading');
        let loadingEffect = pageLoading.querySelector('.Loading')


        let scale = Math.sqrt(Math.pow(window.outerHeight, 2) + Math.pow(window.outerWidth, 2)) / 100*2
        loadingEffect.style.transform = 'translate(-50%, -50%) scale(${scale})'
        loadingEffect.left = '${e.clientX}px'
        loadingEffect.top = '${e.clientY}px'
        setTimeout( () => {
            history.push(e.target.href?.replace(window.location.origin, '') || '/')
            $('.overlay_nav').trigger('click');
        }, 300)

        setTimeout(() => {
            loadingEffect.style.transform = 'translate(-50%, -50%) scale(0)'
        }, 600)
    }

    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={delayLink}>
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
                                <Link to="/thong-tin-ca-nhan" onClick={delayLink} >Thông tin tài khoản</Link>
                                <Link to="/thong-tin-ca-nhan/khoa-hoc-cua-toi" onClick={delayLink} >Khóa học của tôi</Link>
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
                        <Link to="/" onClick={delayLink} >Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/team" onClick={delayLink} >CFD Team</Link>
                    </li>
                    <li>
                        <Link to="/chi-tiet-khoa-hoc" onClick={delayLink} >Khóa Học</Link>
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
