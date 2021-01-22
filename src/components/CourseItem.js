import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseItem(props) {
    return (
        <div className="col-md-4 course">
                <div className="wrap">
                    <a className="cover" href="#">
                        <img src={props.thumbnail} alt="" />
                        <span className="badge b1">{props.status}</span>
                        <div className="hover">
                            <div className="top">
                                <div className="user">
                                    <img src="/img/icon-user-white.svg" alt="" />
                          12</div>
                                <div className="heart">
                                    <img src="/img/icon-heart.svg" alt="" /> 100
                        </div>
                            </div>
                            <div className="share">
                                <img src="/img/icon-viewmore.svg" alt="" />
                            </div>
                        </div>
                    </a>
                    <div className="info">
                        <a className="name" href="#">
                           {props.name}
                    </a>
                        <p className="des">
                            {props.des}
                    </p>
                    </div>
                    <div className="bottom">
                        <div className="teacher">
                            <div className="avatar">
                                <img src="/img/avt.png" alt="" />
                            </div>
                            <div className="name">{props.teacher}</div>
                        </div>
                        <Link to="dang-ky" className="register-btn">Đăng Ký</Link>
                    </div>
                </div>
            </div>
    )
}
