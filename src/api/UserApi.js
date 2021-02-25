import { getToken } from '../core/hook/useLogin'
import { domain } from '../core/Api'

export default {
    profile: () => {
        let accessToken = getToken();
        return fetch(`${domain}/elearning/v4/profile`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res => res.json())
    },
    course: () => {
        let accessToken = getToken();
        return fetch(`${domain}/elearning/v4/profile/course`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res => res.json())
    },
    update: ((data) => {
        let accessToken = getToken();
        return fetch(`${domain}/elearning/v4/profile/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
    }),
    payment: () => { },
    updateAvatar: (data) => {
        let accessToken = getToken(); 

        return fetch(`${domain}/elearning/v4/profile/update-avatar`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: data
        })
        .then(res => res.json())
    }
}
