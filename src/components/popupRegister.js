import React, { useContext } from 'react'
import { context } from '../App'
import ReactDOM from 'react-dom'
import useValidateForm from '../core/hook/useValidateForm'
import { useLogin } from '../core/hook/useLogin'


const style = {
  inputError: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '20px'
  }
}

function PopupRegister(props, ref) {
  
  let { form, inputChange, submit, error } = useValidateForm({
    name: '',
    email: '',
    password: ''
  }, {
    rule: {
      name: {
        required: true
      },
      email: {
        required: true,
        pattern: 'email'
      },
      password: {
        min: 6,
        max: 32
      }
    },
    message: {
      name: {
        required: 'Họ và tên không được để trống'
      },
      email: {
        pattern: 'Email không không được để trống'
      },
      password: {
        pattern: 'Trường này không được để trống'
      }
    }
  })

  let login = useLogin();
  let registerContext = useContext(context)

  function btnSubmit(e) {
    e.preventDefault();
    let error = submit();


    if (Object.keys(error).length === 0) {
      fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/register', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(res => {
          if(res.data){
            login.activeLogin(res.data)

            registerContext.closePopupRegister()
        }
        })
    }

  }


  return ReactDOM.createPortal(
    <div className="popup-form popup-login" ref={ref} style={{ display: 'none' }}>
      <div className="wrap">
        <h2 className="title">Đăng ký</h2>
        <input type="text" placeholder="Họ và Tên" onChange={inputChange} name="name" value={form.name} />
        {
          error.name && <p className="error" style={style.inputError} >{error.name}</p>
        }
        <input type="text" placeholder="Email / Số điện thoại" onChange={inputChange} name="email" value={form.email} />
        {
          error.email && <p className="error" style={style.inputError} >{error.email}</p>
        }
        <input type="password" placeholder="Mật khẩu" onChange={inputChange} name="password" value={form.password} />
        {
          error.password && <p className="error" style={style.inputError} >{error.password}</p>
        }
        <div className="btn rect main btn-login" onClick={btnSubmit}>đăng ký</div>
        <div className="text-register" style={{}}>
          <strong>hoặc đăng ký bằng</strong>
        </div>
        <div className="btn btn-icon rect white btn-google">
          <img src="img/google.svg" alt="" />
            Google
          </div>
        <p className="policy">
          Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
          </p>
        <div className="close" onClick={registerContext.closePopupRegister} >
          <img src="img/close-icon.png" alt="" />
        </div>
      </div>
    </div>,
    document.getElementById('root2')
  )
}

export default React.forwardRef(PopupRegister);
