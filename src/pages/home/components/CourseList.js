import React from 'react'
import CourseItem from '../../../components/CourseItem'

export default function CourseList() {
    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        <CourseItem thumbnail="/img/course/khoa-hoc-front-end-can-ban-cfd1.jpg" status="Đã kết thúc" name="CFD3 Web Responsive"
                            des="Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery." />
                        <CourseItem thumbnail="/img/course/khoa-hoc-react-js-javascript-cfd1.jpg" status="Đã kết thúc" name="CFD3 React JS"
                            des="Khóa học thực chiến Javascript, ES6, JSON, API và React JS, Redux." teacher="Trần Nghĩa" />
                        <CourseItem thumbnail="/img/course/khoa-hoc-front-end-can-ban-cfd1.jpg" status="Đang diễn ra" name="CFD4 Web Responsive"
                            des="Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery." />
                        <CourseItem thumbnail="/img/course/khoa-hoc-react-js-javascript-cfd1.jpg" status="Đang diễn ra" name="CFD5 React JS"
                            des="Khóa học thực chiến Javascript, ES6, JSON, API và React JS, Redux." teacher="Đặng Vương" />
                        <CourseItem thumbnail="/img/course/khoa-hoc-front-end-can-ban-cfd1.jpg" status="Sắp diễn ra" name="CFD5 Web Responsive"
                            des="Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery." />
                        <CourseItem thumbnail="/img/course/khoa-hoc-react-js-javascript-cfd1.jpg" status="Sắp diễn ra" name="CFD5 React JS"
                            des="Khóa học thực chiến Javascript, ES6, JSON, API và React JS, Redux." teacher="Trần Nghĩa" />
                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        <CourseItem thumbnail="/img/course/khoa-hoc-front-end-can-ban-cfd1.jpg" status="Đã kết thúc" name="CFD3 Web Responsive"
                            des="Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery." teacher="Đặng Vương" />
                        <CourseItem thumbnail="/img/course/khoa-hoc-front-end-can-ban-cfd1.jpg" status="Đang diễn ra" name="CFD4 Web Responsive"
                            des="Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery." teacher="Trần Nghĩa" />
                        <CourseItem thumbnail="/img/course/khoa-hoc-front-end-can-ban-cfd1.jpg" status="Sắp diễn ra" name="CFD5 Web Responsive"
                            des="Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery." teacher="Trần Nghĩa" />
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}
