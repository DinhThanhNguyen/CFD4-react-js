import React, { useContext, useRef } from 'react'
import ReactDOM from 'react-dom'
import { context } from '../App';
import { useLogin } from '../core/hook/useLogin';
import useValidateForm from '../core/hook/useValidateForm';


const style = {
    inputError: {
        color: 'red',
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '20px'
    }
}

function PopupLogin(props, ref) {

    let {form, inputChange, submit, error} = useValidateForm({
        name: '',
        password: ''
    },{
        rule: {
           
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32
            }
        }, 
        message: {
            
            username: {
                pattern: 'Email không không được để trống'
            },
            password: {
                pattern: 'Trường này không được để trống'
            }
        }
    })
    let login = useLogin();
    function btnSubmit(e) {
        e.preventDefault();
        let error = submit();

        if(Object.keys(error).length === 0){
            fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/login', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type' : 'application/json'
                }
            }). then(res => res.json())
                .then(res => {
                    if(res.data){
                        login.activeLogin(res.data)

                        contextLogin.closePopupLogin()
                    }
                })
        }

    }

    let contextLogin = useContext(context);
    return ReactDOM.createPortal(
        <div className="popup-form popup-login" ref={ref} style={{ display: 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    <input type="text" placeholder="Email / Số điện thoại" onChange={inputChange} name="username" value={form.username} />
                    {
                        error.username && <p className="error" style={style.inputError} >{error.username}</p>
                    }                   
                    <input type="password" placeholder="Mật khẩu" onChange={inputChange} name="password" value={form.password} />
                    {
                        error.password && <p className="error" style={style.inputError} >{error.password}</p>
                    }
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={btnSubmit}>đăng nhập</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
                        Google
                        </div>
                    </div>
                    <div className="close" onClick={contextLogin.closePopupLogin}>
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div>
                {/* email form */}
                {/* <div className="ct_email">
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
                    <div className="back" />
                    <div className="close">
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div> */}
            </div>
        </div>,
        document.getElementById('root2')
    )
}
export default React.forwardRef(PopupLogin);