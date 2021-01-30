import React from 'react'
import Accordion from './Accordion'
import Memtor from './memtor'

export default function IntroCourse(props) {
  return (
    <section className="section-2">
      <div className="container">
        <p className="des">{props.long_description}</p>
        <h2 className="title">giới thiệu về khóa học</h2>
        <p>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
          </h3>
          <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
          <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ nhật từ 15h-18h
            </p>
        <div className="cover">
          <img src="/img/course-detail-img.png" alt="" />
        </div>
        <h3 className="title">nội dung khóa học</h3>
        <Accordion date="Ngày 1" intro="Giới thiệu HTML, SEO, BEM." />
        <Accordion date="Ngày 2" intro="CSS, CSS3, Flexbox, Grid" />
        <Accordion date="Ngày 3" intro="Media Queries" />
        <Accordion date="Ngày 4" intro="Boostrap 4" />
        <Accordion date="Ngày 5" intro="Thực hành dự án website Landing Page" />
        <Accordion date="Ngày 6" intro="Cài đặt Grunt và cấu trúc thư mục dự án" />
        <h3 className="title">yêu cầu cần có</h3>
        <div className="row row-check">
          <div className="col-md-6">Đã từng học qua HTML, CSS</div>
          <div className="col-md-6">Cài đặt phần mềm Photoshop,
                Adobe illustrator, Skype</div>
        </div>
        <h3 className="title">hình thức học</h3>
        <div className="row row-check">
          <div className="col-md-6">Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp.</div>
          <div className="col-md-6">Dạy và thực hành thêm bài tập online
                thông qua Skype.</div>
          <div className="col-md-6">Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook
                hoặc phần mềm điều khiển máy tính.</div>
          <div className="col-md-6">Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</div>
        </div>
        <Memtor />
        <div className="bottom">
          <div className="user">
            <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
              </div>
          <div className="btn main btn-register round">đăng ký</div>
          <div className="btn-share btn overlay round btn-icon">
            <img src="/img/facebook.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
