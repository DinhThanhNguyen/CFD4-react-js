import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useLogin } from '../../../core/hook/useLogin';
import CourseItem from './CourseItem'

export default function MyCourse() {

    let auth = useLogin();
    let [course, setCourse] = useState()
    useEffect(() => {
        fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/profile/course', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${auth.login.token.accessToken}`
            }
        })
        .then(res => res.json())
         .then(res => {
             console.log(res)
             setCourse(res.data)
         })
    }, [])
    if (!course) return <div style={{ height: 500, display: 'flex' }}><div style={{ margin: 'auto' }}>...Loaing</div></div>

    return (
        <div className="tab2">
            {
                course.map((e, index) => <CourseItem key={index} {...e} />)
            }
        </div>
    )
}
