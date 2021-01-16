import React from 'react'
import CourseItem from '../../components/CourseItem'

export default function Course() {
    return (
        <>
            <main className="homepage" id="main">
                <section className="section-1">
                    <div className="container">
                        <h2 className="main-title">KHÓA HỌC CFD</h2>
                        <p className="top-des">
                            The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                            has
                            a more-or-less normal
                        </p>
                        <div className="textbox">
                            <h3 className="sub-title">KHÓA HỌC</h3>
                            <h2 className="main-title">ONLINE & OFFLINE</h2>
                        </div>
                        <div className="list row">
                            <CourseItem thumbnail="/img/img1.png" name="Front-end căn bản" 
                            des="One of the best corporate fashion brands in Sydney" teacher="Trần Nghĩa" />
                            <CourseItem thumbnail="/img/img.png" name="React JS" 
                            des="One of the best corporate fashion brands in Sydney" teacher="Vương Đặng" />
                            <CourseItem thumbnail="/img/img2.png" name="Animation" 
                            des="One of the best corporate fashion brands in Sydney" teacher="Trần Nghĩa" />
                            <CourseItem thumbnail="/img/img3.png" name="UX/UI Design" 
                            des="One of the best corporate fashion brands in Sydney" teacher="Vương Đặng" />
                            <CourseItem thumbnail="/img/img4.png" name="Scss, Grunt JS và Boostrap 4" 
                            des="One of the best corporate fashion brands in Sydney" teacher="Trần Nghĩa" />
                            <CourseItem thumbnail="/img/img5.png" name="Web Responsive" 
                            des="One of the best corporate fashion brands in Sydney" teacher="Trần Nghĩa" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
