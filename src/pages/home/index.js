import React from 'react'
import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Different from './components/Different'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <div>
      <main className="homepage" id="main">
        <Banner />
        <CourseList />
        <Different />
        {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="/https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="/video/CFD-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="/img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
        <section className="section-testimonial">
          <div className="container">
            <div className="textbox">
              <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
            </div>
            <div className="testimonial">
              <div className="testimonial-item">
                <div className="item">
                  <div className="text">
                    <div className="ct ct-1 active">
                      <div className="info">
                        <div className="name">
                          <h4>Tiến Tài</h4>
                          <p>Thành viên CFD1</p>
                        </div>
                        <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                      </div>
                      <div className="content">
                        Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình front-end qua
                        khóa học. Like cho 4 mentor.
                      </div>
                      <div className="bottom">
                        <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                        <span>09/10/2020</span>
                      </div>
                    </div>
                    <div className="ct ct-2">
                      <div className="info">
                        <div className="name">
                          <h4>Phạm Thành Trung</h4>
                          <p>Thành viên CFD1</p>
                        </div>
                        <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                      </div>
                      <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero
                        id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor
                        in, molestie lectus. Aenean porttitor purus at purus euismod tristique
                      </div>
                      <div className="bottom">
                        <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                        <span>01/10/2020</span>
                      </div>
                    </div>
                    <div className="ct ct-3">
                      <div className="info">
                        <div className="name">
                          <h4>Nguyễn Văn Tuấn</h4>
                          <p>Thành viên CFD1</p>
                        </div>
                        <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                      </div>
                      <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero
                        id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor
                        in, molestie lectus. Aenean porttitor purus at purus euismod tristique
                      </div>
                      <div className="bottom">
                        <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                        <span>01/10/2020</span>
                      </div>
                    </div>
                  </div>
                  <div className="images">
                    <div className="list">
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source media="(max-width: 767px)" srcSet="img/Intersect.png" />
                            <img data-flickity-lazyload="img/tes.jpg" alt="" />
                          </picture>
                        </div>
                        <div className="ct_m">
                          <div className="info">
                            <div className="name">
                              <h4>Tiến Tài</h4>
                              <p>Thành viên CFD1</p>
                            </div>
                            <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                          </div>
                          <div className="content">
                            Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
                            front-end qua
                            khóa học. Like cho 4 mentor.
                          </div>
                          <div className="bottom">
                            <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                            <span>09/10/2020</span>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source media="(max-width: 767px)" srcSet="img/Intersect.png" />
                            <img data-flickity-lazyload="img/tes.jpg" alt="" />
                          </picture>
                        </div>
                        <div className="ct_m">
                          <div className="info">
                            <div className="name">
                              <h4>Nguyễn Văn Tuấn</h4>
                              <p>Thành viên CFD1</p>
                            </div>
                            <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                          </div>
                          <div className="content">
                            Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
                            front-end qua
                            khóa học. Like cho 4 mentor.
                          </div>
                          <div className="bottom">
                            <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                            <span>09/10/2020</span>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source media="(max-width: 767px)" srcSet="img/Intersect.png" />
                            <img data-flickity-lazyload="img/tes.jpg" alt="" />
                          </picture>
                        </div>
                        <div className="ct_m">
                          <div className="info">
                            <div className="name">
                              <h4>Phạm Thành Trung</h4>
                              <p>Thành viên CFD1</p>
                            </div>
                            <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                          </div>
                          <div className="content">
                            Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
                            front-end qua
                            khóa học. Like cho 4 mentor.
                          </div>
                          <div className="bottom">
                            <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                            <span>09/10/2020</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dots" />
                <div className="btn_ctr prev" />
                <div className="btn_ctr next" />
              </div>
            </div>
          </div>
        </section>
        <Gallery />
        <section className="section-action">
          <div className="container">
            <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
            <div className="btn main round bg-white">Đăng ký</div>
          </div>
        </section>
      </main>
    </div>
  )
}
