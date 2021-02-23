import React from 'react'
import UserApi from '../../../api/UserApi';
import { useLogin } from '../../../core/hook/useLogin';
import useValidateForm from '../../../core/hook/useValidateForm';

const style = {
    inputError: {
        color: 'red',
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '20px'
    }
}

export default function Infor() {
    let auth = useLogin();

    let { form, error, inputChange, submit } = useValidateForm({
        name: auth.login.name,
        phone: auth.login.phone,
        email: auth.login.email,
        fb: auth.login.fb,
        skype: auth.login.skype,
    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            fb: {
                pattern: /https?:\/\/(www\.)?facebook.com\/[-a-zA-Z0-9@:%._\+~#=]{1,256}/
            },
            skype: {
                required: true
            }
        },
        message: {
            fb: {
                pattern: 'Facebook không đúng định dạng'
            }
        }
    })

    function btnSubmit() {
        let error = submit();
        if(Object.keys(error).length === 0) {
            UserApi.update(form)
                .then(res => {
                    if(res.data){
                        alert('Cập nhật thành công')
                        auth.activeLogin(res.data)
                    }
                })
        }
    }

    return (
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" placeholder="Nguyễn Văn A" onChange={inputChange} name="name" value={form.name} />
            </label>
            {
                error.username && <p className="error" style={style.inputError} >{error.username}</p>
            }
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" placeholder="0949******" onChange={inputChange} name="phone" value={form.phone} />
            </label>
            {
                error.phone && <p className="error" style={style.inputError} >{error.phone}</p>
            }
            <label>
                <p>Email<span>*</span></p>
                <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input type="text" placeholder="Facebook url" onChange={inputChange} name="fb" value={form.fb} />
            </label>
            {
                error.fb && <p className="error" style={style.inputError} >{error.fb}</p>
            }
            <label>
                <p>Skype<span>*</span></p>
                <input type="text" placeholder="Skype url" onChange={inputChange} name="skype" value={form.skype} />
            </label>
            {
                error.skype && <p className="error" style={style.inputError} >{error.skype}</p>
            }
            <div className="btn main rect" onClick={btnSubmit}>LƯU LẠI</div>
        </div>
    )
}
