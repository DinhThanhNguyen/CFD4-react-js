import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import pageApi from '../../api/pageApi'
import courseApi from '../../api/courseApi'
import Memtor from './components/memtor'
import Accordion from './components/Accordion'
import CourseItem from '../../components/CourseItem'



let $ = window.$;
export default function CourseDetail() {

    let routerMath = useRouteMatch();
    let [state, setState] = useState();

    useEffect(async () => {
        let [course, courseRedlated] = await Promise.all([
            pageApi.course_detail(routerMath.params.slug),
            courseApi.related(routerMath.params.slug)
        ])
        if (course.data) {
            setState({ course: course.data, courseRelated: courseRedlated.data })
        }
        function courseDetailAccordion() {
            $('.accordion .accordion__title').on('click', function (e) {
                e.preventDefault();
                $(this).next().stop().slideToggle(200);
                let $accordion = $(this).closest('.accordion');
                if ($accordion.hasClass('active')) {
                    $accordion.removeClass('active')
                } else {
                    $accordion.addClass('active')
                }
                $(this).closest('.accordion').siblings('.active').removeClass('active').find('.content').stop().slideUp(200);
            })
        }

        courseDetailAccordion();
    }, [routerMath.params.slug])

    if (!state) return <div style={{ height: 500, display: 'flex' }}><div style={{ margin: 'auto' }}>...Loaing</div></div>

    let { course, courseRelated } = state;
    console.log(course)

    let money = new Intl.NumberFormat('vn').format(course.money)

    return (
        <main className="course-detail" id="main">
            <section className="banner style2" style={{ "--background": '#cde6fb' }}>
                <div className="container">
                    <div className="info">
                        <h1>{course.title}</h1>
                        <div className="row">
                            <div className="date"><strong>Khai giảng:</strong> {course.opening_time}</div>
                            <div className="time"><strong>Thời lượng:</strong> {course.count_video} buổi</div>
                        </div>
                        <Link to={{ pathname: `/dang-ky/${course.slug}`, state: { demo: 1 } }} className="btn white round" style={{ "--color-btn": '#70b6f1' }}>đăng ký</Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="video">
                            <div className="icon">
                                <img src="/img/play-icon-white.png" alt="" />
                            </div> <span>giới thiệu</span>
                        </div>
                        <div className="money">{course.money} VND</div>
                    </div>
                </div>
            </section>
            <section className="section-2">
                <div className="container">
                    <p className="des">{course.long_description}</p>
                    <h2 className="title">giới thiệu về khóa học</h2>
                    <p>
                        <h3 className="title">
                            <div className="date-start">lịch học</div>
                            <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                        </h3>
                        <strong>Ngày bắt đầu: </strong> {course.opening_time} <br />
                        <strong>Thời gian học: </strong> {course.schedule}
                    </p>
                    <div className="cover">
                        <img src="/img/course-detail-img.png" alt="" />
                    </div>
                    <h3 className="title">nội dung khóa học</h3>
                    {
                        course.content.map((e, i) => <Accordion key={i} index={i + 1} content={e.content} title={e.title} />)
                    }
                    <h3 className="title">yêu cầu cần có</h3>
                    <div className="row row-check">
                        {
                            course.required.map((e, i) => <div key={i} className="col-md-6">{e.content}</div>)
                        }
                    </div>
                    <h3 className="title">hình thức học</h3>
                    <div className="row row-check">
                        {
                            course.benefits.map((e, i) => <div key={i} className="col-md-6">{e.content}</div>)
                        }
                    </div>
                    <h3 className="title">Người dạy</h3>
                    <Memtor avatar={course.teacher.avatar.link} position={course.teacher.position} content={course.teacher.description} title={course.teacher.title}
                        website={course.teacher.website} />
                    {
                        course.mentor?.length > 0 && <>
                            <h3 className="title">Người hướng dẫn</h3>
                            <div className="teaches">
                                {course.mentor.map((e, i) => <Memtor key={i} avatar={e.avatar.link} name={e.title} position={e.position} content={e.description} website={e.website} />)}
                            </div>
                        </>
                    }
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
            <section className="section-4">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">Khóa học</h3>
                        <h2 className="main-title">Liên quan</h2>
                    </div>
                    <div className="list row">
                        {
                            courseRelated?.map((e, i) => <CourseItem key={i} {...e} />)
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
