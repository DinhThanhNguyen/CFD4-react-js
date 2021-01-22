import React, { useState } from 'react'

const style = {
    inputError: {
        color: 'red',
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '20px'
    }
}
function isVietnamesePhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}
function isUrl(s) {
    var regexp = /(ftp|http|https):\/\/www.facebook.com(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}

export default function Infor() {
    let [form, setForm] = useState({
        username: '',
        phone: '',
        fb: '',
        skype: ''
    })
    let [error, setError] = useState({});
    function inputChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.getAttribute('name');
        form[name] = value;
        setForm({
            ...form
        })
    }
    function validateForm() {
        let error = {};
        if (!form.username) {
            error['username'] = "Họ và Tên không được để trống";
        }
        if (!form.phone) {
            error['phone'] = "Số điện thoại không được để trống";
        }
        else if (!isVietnamesePhoneNumber(form.phone)) {
            error['phone'] = "Số điện thoại không đúng định dạng";
        }
        if (!form.fb) {
            error['fb'] = "Facebook không được để trống";
        } else if (!(isUrl(form.fb))) {
            error['fb'] = "Facebook không đúng định dạng";
        }
        if (!form.skype) {
            error['skype'] = "Skype không được để trống"
        }
        setError(error)
    }


    return (
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" placeholder="Nguyễn Văn A" onChange={inputChange} name="username" value={form.username} />
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
            <div className="btn main rect" onClick={validateForm}>LƯU LẠI</div>
        </div>
    )
}
