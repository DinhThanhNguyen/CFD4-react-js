import React, { useState, useEffect } from 'react'
import UserApi from '../../../api/UserApi';
import { useLogin } from '../../../core/hook/useLogin';
import CourseItem from './CourseItem'

export default function MyCourse() {

    let auth = useLogin();
    let [course, setCourse] = useState()

    useEffect(async () => {
        let res = await UserApi.course()
        setCourse(res.data) 
    }, [])
    if (!course) return <div style={{ height: 500, display: 'flex' }}><div style={{ margin: 'auto' }}>...Loaing</div></div>

    return (
        <div className="tab2">
            {
                course.length === 0 ?
                <div style={{ height: 500, display: 'flex' }}><div style={{ margin: 'auto' }}>Bạn chưa đăng ký khoá học nào</div></div>
                :
                course.map((e, index) => <CourseItem key={index} {...e} />)
            }
        </div>
    )
}
