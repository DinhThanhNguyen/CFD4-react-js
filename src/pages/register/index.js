import React, { useState } from 'react'
import useValidateForm from '../../core/hook/useValidateForm';

const style = {
    inputError: {
        color: 'red',
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '20px'
    }
}

// function isVietnamesePhoneNumber(number) {
//     return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
// }
// function isUrl(s) {
//     var regexp = /(ftp|http|https):\/\/www.facebook.com(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
//     return regexp.test(s);
// }
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

export default function Register() {

    let { form, error, inputChange, submit } = useValidateForm({
        username: '',
        phone: '',
        email: '',
        fb: '',
        payment: 'chuyen-khoan',
        note: ''
    }, {
        rule: {
            username: {
                required : true
            },
            phone: {
                pattern: 'phone'
            },
            email: {
                pattern: 'email'
            },
            fb: {
                pattern: 'url'
            }
        },
        massage: {
            username: {
                required : 'Họ và Tên không được để trống'
            },
            phone: {
                pattern: 'Số điện thoại không đúng định dạng'
            },
            email: {
                pattern: 'Email không đúng định dạng'
            },
            fb: {
                pattern: 'FB URL không đúng định dạng'
            }
        }
    })





    // let [error, setError] = useState({});

    // function inputChange(event) {
    //     let target = event.target;

    //     let value = target.value;

    //     let name = target.getAttribute('name');

    //     form[name] = value;

    //     setForm({
    //         ...form
    //     })
    // }
    function validateForm() {
        
        // if (!form.username) {
        //     error['username'] = "Họ và Tên không được để trống";
        // }

        // if (!form.phone) {
        //     error['phone'] = "Số điện thoại không được để trống";
        // } else if (!isVietnamesePhoneNumber(form.phone)) {
        //     error['phone'] = "Số điện thoại không đúng định dạng";
        // }

        // if (!form.email) {
        //     error['email'] = "Email không được để trống";
        // } else if (!validateEmail(form.email)) {
        //     error['email'] = "Email không đúng định dạng";
        // }

        // if (!form.fb) {
        //     error['fb'] = "Facebook không được để trống";
        // } else if (!(isUrl(form.fb))) {
        //     error['fb'] = "Facebook không đúng định dạng";
        // }

        // setError(error)
        // let error = submit();


        let error = submit();
    }
    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" placeholder="Họ và tên bạn" onChange={inputChange} name="username" value={form.username} />
                            </label>
                            {
                                error.username && <p className="error" style={style.inputError} >{error.username}</p>
                            }
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input type="text" placeholder="Số điện thoại" onChange={inputChange} name="phone" value={form.phone} />
                            </label>
                            {
                                error.phone && <p className="error" style={style.inputError} >{error.phone}</p>
                            }
                            <label>
                                <p>Email<span>*</span></p>
                                <input type="text" placeholder="Email của bạn" onChange={inputChange} name="email" value={form.email} />
                            </label>
                            {
                                error.email && <p className="error" style={style.inputError} >{error.email}</p>
                            }
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input type="text" placeholder="https://facebook.com" onChange={inputChange} name="fb" value={form.fb} />
                            </label>
                            {
                                error.fb && <p className="error" style={style.inputError} >{error.fb}</p>
                            }
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." onChange={inputChange} name="note" value={form.note} />
                            </label>
                            <div className="btn main rect" onClick={validateForm}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}
