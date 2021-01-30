import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Banner from './components/Banner'
import IntroCourse from './components/IntroCourse'
import MemberProject from './components/MemberProject'
import Memtor from './components/memtor'
import RelatedCourses from './components/RelatedCourses'

export default function CourseDetail() {

    let [detail, setDetail] = useState()
    useEffect(() => {
        fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/course/cfd5-react-js')
        .then(res => res.json())
         .then(res => {
             console.log(res)
             setDetail(res.data)
         })
    }, [])

    return (
        <main className="course-detail" id="main">
            <Banner {...detail} />
            <IntroCourse />
            <MemberProject />
            <RelatedCourses />
      </main>
    )
}
