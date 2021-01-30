import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner(props) {
  console.log(props)
    return (
        <section className="banner style2" style={{"--background": '#cde6fb'}}>
        <div className="container">
          <div className="info">
            <h1>{props.title}</h1>
            <div className="row">
              <div className="date"><strong>Khai giảng:</strong> 12/10/2020</div>
              <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
            </div>
            <Link to="/dang-ky" className="btn white round" style={{"--color-btn": '#70b6f1'}}>đăng ký</Link>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video">
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div> <span>giới thiệu</span>
            </div>
            <div className="money">{props.money} VND</div>
          </div>
        </div>
      </section>
    )
}
