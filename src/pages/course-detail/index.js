import React from 'react'
import Banner from './components/Banner'
import IntroCourse from './components/IntroCourse'
import MemberProject from './components/MemberProject'
import RelatedCourses from './components/RelatedCourses'

export default function CourseDetail() {
    return (
        <main className="course-detail" id="main">
            <Banner />
            <IntroCourse />
            <MemberProject />
            <RelatedCourses />
      </main>
    )
}
