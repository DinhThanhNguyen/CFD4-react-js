import React from 'react'
import Member from './Components/Member'

export default function Team() {
    return (
        <main className="team" id="main">
        <section>
          <div className="container">
            <div className="top">
              <h2 className="main-title">CFD team</h2>
              <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                elementum
                sem non luctus
              </p>
            </div>
            <div className="list row">
              <Member className="item col-md-6 col-sm-6" thumbnail="/img/thumb-member.jpg" name="Trần Nghĩa" title="Founder CFD & Creative Front-End Developer" />
              <Member className="item col-md-6 col-sm-6" thumbnail="/img/thumb-member.jpg" name="Đặng Thuyền Vương" title="Co-Founder CFD & Fullstack Developer" />
              <Member className="item col-md-6 col-sm-6" thumbnail="/img/thumb-member.jpg" name="Đặng Thuyền Quân" title="Co-founder CFD & Backend Developer" />
              <Member className="item col-md-6 col-sm-6" thumbnail="/img/thumb-member.jpg" name="Nguyễn Đức Huy" title="Co-founder & Front-end Developer" />
              <Member className="item col-md-3 col-sm-4 col-xs-6" thumbnail="/img/thumb-member.jpg" name="Diệp Anh Thy" title="CFD1-Offline" />
              <Member className="item col-md-3 col-sm-4 col-xs-6" thumbnail="/img/thumb-member.jpg" name="Huỳnh Tiến Tài" title="CFD1-Offline" />
              <Member className="item col-md-3 col-sm-4 col-xs-6" thumbnail="/img/thumb-member.jpg" name="Ngô Thành Long" title="CFD1-Offline" />
              <Member className="item col-md-3 col-sm-4 col-xs-6" thumbnail="/img/thumb-member.jpg" name="Trần Anh Tuấn" title="CFD2-Offline" />
              <Member className="item col-md-3 col-sm-4 col-xs-6" thumbnail="/img/thumb-member.jpg" name="Nguyễn Thành Tùng" title="CFD2-Offline" />
              <Member className="item col-md-3 col-sm-4 col-xs-6" thumbnail="/img/thumb-member.jpg" name="Phạm Thành Trung" title="CFD2-Offline" />
            </div>
          </div>
        </section>
      </main>
    )
}
