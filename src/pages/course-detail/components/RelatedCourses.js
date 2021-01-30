import React from 'react'
import CourseItem from '../../../components/CourseItem'

export default function RelatedCourses() {
    return (
        <section className="section-4">
            <div className="container">
                <div className="textbox">
                    <h3 className="sub-title">Khóa học</h3>
                    <h2 className="main-title">Liên quan</h2>
                </div>
                <div className="list row">
                    {/* <CourseItem thumbnail="/img/img.png" name="Front-end căn bản"
                        des="One of the best corporate fashion brands in Sydney" teacher="Trần Nghĩa" />
                    <CourseItem thumbnail="/img/img2.png" name="Front-end nâng cao"
                        des="One of the best corporate fashion brands in Sydney" teacher="Đặng Vương" />
                    <CourseItem thumbnail="/img/img3.png" name="Laravel framework"
                        des="One of the best corporate fashion brands in Sydney" teacher="Đặng Vương" /> */}
                </div>
            </div>
        </section>
    )
}
