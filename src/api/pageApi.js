import { domain } from "../core/Api"



export default {
    course_detail: (slug) => {
        return fetch(`${domain}/elearning/v4/course/${slug}`)
            .then(res => res.json())
    },
    courses: () => {
        return fetch(`${domain}/elearning/v4/courses`)
            .then(res => res.json())
    },
    contact: (data) => {
        return fetch(`{domain}/elearning/v4/contact`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: data
        })
            .then (res => res.json())
    }
}