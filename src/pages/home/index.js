import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default function Home() {
    return (
        <div>
        <main>
          <div className="banner" style={{backgroundImage: 'url(/img/img-home.jpg)'}}>
            <div className="inner__banner">
              <h2>Thực chiến</h2>
              <p>Để trở thành creative front-end developer</p>
              <a href="#" className="btn btn-round">Khoá học</a>
            </div>
          </div>
          <section className="section online">
            <div className="container">
              <div className="introduce">
                The readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
              </div>
              <div className="course">
                <h2 className="title">Khoá học</h2>
                <h2 className="type">online</h2>
                <div className="row">
                  <div className="col-md-4 course__item">
                    <a className="course__item-img">
                      <img src="/img/img-1.jpg" alt="alter" />
                    </a>
                    <div className="course__item-info">
                      <div className="course__item-wrap">
                        <h2 className="course__item-title">Front-end căn bản</h2>
                        <p className="course__item-des">
                          One of the best corporate fashion brands in Sydney
                        </p>
                      </div>
                      <div className="course__item-details">
                        <div className="teacher">
                          <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                          </div>
                          <div className="name">Trần Nghĩa</div>
                        </div>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 course__item">
                    <a className="course__item-img">
                      <img src="/img/img-2.jpg" alt="alter" />
                    </a>
                    <div className="course__item-info">
                      <div className="course__item-wrap">
                        <h2 className="course__item-title">React JS</h2>
                        <p className="course__item-des">
                          One of the best corporate fashion brands in Sydney
                        </p>
                      </div>
                      <div className="course__item-details">
                        <div className="teacher">
                          <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                          </div>
                          <div className="name">Trần Nghĩa</div>
                        </div>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                      </div>
                      <div className="course__item-quantity">
                        <div className="item">
                          <img src="/img/user.svg" alt="" />
                          <span>12</span>
                        </div>
                        <div className="item">
                          <img src="/img/heart.svg" alt="" />
                          <span>100</span>
                        </div>
                      </div>
                      <div className="course__item-viewmore">
                        <img src="/img/viewmore.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 course__item">
                    <a className="course__item-img">
                      <img src="/img/img-3.jpg" alt="alter" />
                    </a>
                    <div className="course__item-info">
                      <div className="course__item-wrap">
                        <h2 className="course__item-title">Animation</h2>
                        <p className="course__item-des">
                          One of the best corporate fashion brands in Sydney
                        </p>
                      </div>
                      <div className="course__item-details">
                        <div className="teacher">
                          <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                          </div>
                          <div className="name">Trần Nghĩa</div>
                        </div>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 course__item">
                    <a className="course__item-img">
                      <img src="/img/img-4.jpg" alt="alter" />
                    </a>
                    <div className="course__item-info">
                      <div className="course__item-wrap">
                        <h2 className="course__item-title">
                          Scss, Grunt JS và Boostrap 4
                        </h2>
                        <p className="course__item-des">
                          One of the best corporate fashion brands in Sydney
                        </p>
                      </div>
                      <div className="course__item-details">
                        <div className="teacher">
                          <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                          </div>
                          <div className="name">Trần Nghĩa</div>
                        </div>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 course__item">
                    <a className="course__item-img">
                      <img src="/img/img-5.jpg" alt="alter" />
                    </a>
                    <div className="course__item-info">
                      <div className="course__item-wrap">
                        <h2 className="course__item-title">UX/UI Design</h2>
                        <p className="course__item-des">
                          One of the best corporate fashion brands in Sydney
                        </p>
                      </div>
                      <div className="course__item-details">
                        <div className="teacher">
                          <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                          </div>
                          <div className="name">Trần Nghĩa</div>
                        </div>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 course__item">
                    <a className="course__item-img">
                      <img src="/img/img-3.jpg" alt="alter" />
                    </a>
                    <div className="course__item-info">
                      <div className="course__item-wrap">
                        <h2 className="course__item-title">Web Responsive</h2>
                        <p className="course__item-des">
                          One of the best corporate fashion brands in Sydney
                        </p>
                      </div>
                      <div className="course__item-details">
                        <div className="teacher">
                          <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                          </div>
                          <div className="name">Trần Nghĩa</div>
                        </div>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section offline">
            <div className="container">
              <div className="course">
                <h2 className="title">Khoá học</h2>
                <h2 className="type">offline</h2>
                <div className="row">
                  <div className="col-md-4 course__item">
                    <a className="course__item-img">
                      <img src="/img/img-7.jpg" alt="alter" />
                    </a>
                    <div className="course__item-info">
                      <div className="course__item-wrap">
                        <h2 className="course__item-title">Front-end căn bản</h2>
                        <p className="course__item-des">
                          One of the best corporate fashion brands in Sydney
                        </p>
                      </div>
                      <div className="course__item-details">
                        <div className="teacher">
                          <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                          </div>
                          <div className="name">Trần Nghĩa</div>
                        </div>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 course__item">
                    <a className="course__item-img">
                      <img src="/img/img-8.jpg" alt="alter" />
                    </a>
                    <div className="course__item-info">
                      <div className="course__item-wrap">
                        <h2 className="course__item-title">Front-end nâng cao</h2>
                        <p className="course__item-des">
                          One of the best corporate fashion brands in Sydney
                        </p>
                      </div>
                      <div className="course__item-details">
                        <div className="teacher">
                          <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                          </div>
                          <div className="name">Trần Nghĩa</div>
                        </div>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 course__item">
                    <a className="course__item-img">
                      <img src="/img/img-9.jpg" alt="alter" />
                    </a>
                    <div className="course__item-info">
                      <div className="course__item-wrap">
                        <h2 className="course__item-title">Laravel framework</h2>
                        <p className="course__item-des">
                          One of the best corporate fashion brands in Sydney
                        </p>
                      </div>
                      <div className="course__item-details">
                        <div className="teacher">
                          <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                          </div>
                          <div className="name">Trần Nghĩa</div>
                        </div>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section different">
            <div className="container">
              <div className="row">
                <div className="title-different col md-6">
                  <h2>
                    những điều<br />
                    <span>đặc biệt</span> tại cfd
                  </h2>
                  <div className="img-wrap">
                    <div className="img-item img-1">
                      <img src="/img/img-d-1.jpg" alt="" />
                    </div>
                    <div className="img-item img-2">
                      <img src="/img/img-d-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="content-different col-md-6">
                  <div className="content__item">
                    <h2>Không cam kết đầu ra</h2>
                    <p>
                      Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu như
                      cả người hướng dẫn và người học không thật sự tâm huyết và cố
                      gắng. Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các thành
                      viên tạo ra sản phẩm có giá trị, thay vì cam kết.
                    </p>
                  </div>
                  <div className="content__item">
                    <h2>Không phải một lớp học</h2>
                    <p>
                      CFD không phải một lớp học thuần túy, tất cả thành viên là một
                      team, cùng hổ trợ, chia sẻ và giúp đỡ nhau trong suốt quá
                      trình học và sau này, với sự hướng dẫn tận tâm của các thành
                      viên đồng sáng lập CFD.
                    </p>
                  </div>
                  <div className="content__item">
                    <h2>Không để ai bị bỏ lại phía sau</h2>
                    <p>
                      Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ
                      được đội ngũ CFD kèm cặp đặc biệt, cùng sự hổ trợ từ các thành
                      viên khác trong team. Vì mục tiêu cuối cùng là hoàn thành khóa
                      học thật tốt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section comment">
            <div className="container">
              <div className="course">
                <h2 className="title">Cảm nhận</h2>
                <h2 className="type">Thành viên</h2>
              </div>
              <div className="comment-box">
                <div className="inner_comment-box">
                  <div className="item">
                    <div className="text">
                      <div className="text-item it1 js-comment-active">
                        <div className="info">
                          <div className="name">
                            <h2>Tiến Tài</h2>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="/img/daunhay.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập
                          trình front-end qua khóa học. Like cho 4 mentor.
                        </div>
                        <div className="bottom">
                          <span className="fb">
                            <img src="/img/facebook-app-symbol.svg" alt="" />
                          </span>
                          <span className="date"> 08/09/2020 </span>
                        </div>
                      </div>
                      <div className="text-item it2">
                        <div className="info">
                          <div className="name">
                            <h2>Nguyễn Thanh Tùng</h2>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="/img/daunhay.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          Khoá học này thực sự rất chất lượng. Mình từ một người làm Sale, chưa biết gì về HTML, CSS, JS, mà giờ code được 1 web hoàn chỉnh. Mentor thì hỗ trợ nhiệt tình, lên lớp học lý thuyết xong là thực chiến luôn, về nhà thì livestream sửa bài, có khi tới 1-2h sáng luôn. Sau khoá học thì được các mentor chia sẻ kinh nghiệm.
                        </div>
                        <div className="bottom">
                          <span className="fb">
                            <img src="/img/facebook-app-symbol.svg" alt="" />
                          </span>
                          <span className="date"> 12/09/2020 </span>
                        </div>
                      </div>
                      <div className="text-item it3">
                        <div className="info">
                          <div className="name">
                            <h2>Nguyễn Anh Tuấn</h2>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="/img/daunhay.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          Mình đã từng tự học nhưng bị mất phương hướng trầm trọng, sau khóa học mình đã tự code được 2 dự án riêng, 4 mentor dạy và hỗ trợ học viên rất có tâm, chuyện livestream giải đáp thắc mắc cho học viên tới khuya là thường xuyên. Sau khóa học mình học được cách tạo giao diện sao cho đẹp tinh tế, thân thiện với người dùng.
                        </div>
                        <div className="bottom">
                          <span className="fb">
                            <img src="/img/facebook-app-symbol.svg" alt="" />
                          </span>
                          <span className="date"> 21/09/2020 </span>
                        </div>
                      </div>
                      <div className="text-item it4">
                        <div className="info">
                          <div className="name">
                            <h2>Phạm Thành Trung</h2>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="/img/daunhay.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          Các mentor dạy có tâm, nhiệt tình. Mình là người chưa biết html và css, sau khóa học thì mình có thể tự tin code được giao diện theo thiết kế và cả việc xử lí các sự kiện bằng javascript và jquery.
                        </div>
                        <div className="bottom">
                          <span className="fb">
                            <img src="/img/facebook-app-symbol.svg" alt="" />
                          </span>
                          <span className="date"> 02/10/2020 </span>
                        </div>
                      </div>
                    </div>
                    <div className="images">
                      <div className="img">
                        <img src="/img/member-1.jpg" alt="" />
                      </div>
                      <div className="img">
                        <img src="/img/img-member2.jpg" alt="" />
                      </div>
                      <div className="img">
                        <img src="/img/img-member3.jpg" alt="" />
                      </div>
                      <div className="img">
                        <img src="/img/img-member4.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="list-dots">
                  </div>
                  <div className="button button__left" />
                  <div className="button button__right" />
                </div>
              </div>
            </div>
          </section>
          <section className="section team">
            <div className="container">
              <div className="course">
                <h2 className="title">Chúng ta</h2>
                <h2 className="type">Là một team</h2>
              </div>
              <div className="slider">
                <div className="slider--item">
                  <img src="/img/slider1.jpg" alt="" />
                </div>
                <div className="slider--item">
                  <img src="/img/slider2.jpg" alt="" />
                </div>
                <div className="slider--item">
                  <img src="/img/slider3.png" alt="" />
                </div>
                <div className="slider--item">
                  <img src="/img/slider4.jpg" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="section ready">
            <div className="container">
              <div className="inner__ready">
                <h3>
                  Bạn đã sẵn sàng tham gia cùng CFD để tạo ra những sản phẩm có giá
                  trị chưa?
                </h3>
                <a href="#" className="btn btn-round">Đăng ký</a>
              </div>
            </div>
          </section>
        </main>
        <div className="popup-signin" style={{display: 'none'}}>
          <div className="wrap">
            <form id="login">
              <div className="ct_login">
                <h2 className="title">Đăng nhập</h2>
                <input type="hidden" className="url_post" defaultValue />
                <input name="email" type="text" placeholder="Email / Số điện thoại" />
                <input name="password" type="password" placeholder="Mật khẩu" />
                <p className="mess-error" id="message_login" />
                <div className="remember">
                  <label className="btn-remember">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>Nhớ mật khẩu</p>
                  </label>
                  <a href="#" className="forget btn-open-popup" data-id="reset-password">Quên mật khẩu?</a>
                </div>
                <div className="btn btn-login btn-register">đăng nhập</div>
                <div className="text-register" style={{fontWeight: 700}}>
                  <strong>Hoặc đăng nhập bằng</strong>
                </div>
                <div>
                  <div className="btn btn-login btn-google " id="googleSignIn">
                    <img src="/img/google.svg" alt="" />
                    Google
                  </div>
                  <p className="mess-error" id="message_login_by_g" />
                </div>
                <div className="close">
                  <img src="/img/close-icon.png" alt="" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
