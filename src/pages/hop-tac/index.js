import React from 'react'
import pageApi from '../../api/pageApi';
import useValidateForm from '../../core/hook/useValidateForm'


const style = {
  inputError: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '20px'
  }
}

export default function Collaborate() {
  let { form, error, inputChange, submit } = useValidateForm({
    name: '',
    phone: '',
    email: '',
    website: '',
    content: ''
  }, {
    rules: {
      name: {
        required: true
      },
      phone: {
        pattern: 'phone'
      },
      email: {
        pattern: 'email'
      },
      website: {
        required: true
      },
      content: {
        required: true
      }
    }
  }, {
    message: {
      name: {
        required: 'Họ và Tên không được để trống'
      },
      phone: {
        pattern: 'Số điện thoại không đúng định dạng'
      },
      email: {
        pattern: 'Email không đúng định dạng'
      },
    }
  })
  function btnSubmit() {
    let error = submit();
    if (Object.keys(error).length === 0){
      pageApi.contact(form)
        .then(res => {
          if(res.success)
            alert('Gửi liên hệ thành công, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.')
        })
    }
  }

  return (
    <main className="register-course" id="main">
      <section className="section-1 wrap container">
        {/* <div class="main-sub-title">liên hệ</div> */}
        <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
        <p className="top-des">
          Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
        <div className="form">

        <Input title="Họ và tên" required placeholder="Họ và tên bạn" name="name" defaultValue={form.name} error={error.name} onChange={inputChange} />
        <Input title="Số điện thoại" required placeholder="Số điện thoại" name="phone" defaultValue={form.phone} error={error.phone} onChange={inputChange} />
        <Input title="Email" required placeholder="Email của bạn" name="email" defaultValue={form.email} error={error.email} onChange={inputChange} />
        <Input title="Website" placeholder="Đường dẫn website http://" name="website" defaultValue={form.website} error={error.website} onChange={inputChange} />
        <Input title="Tiêu đề" required placeholder="Tiêu đề liên hệ" name="title" defaultValue={form.title} error={error.title} onChange={inputChange} />
          <label>
            <p>Nội dung<span>*</span></p>
            <textarea name id cols={30} rows={10} defaultValue={form.content} onChange={inputChange} />
          </label>
          {
            error.content && <p className="error" style={style.inputError} >{error.content} </p>
          }
          <div className="btn main rect" onClick={btnSubmit}>đăng ký</div>
        </div>
      </section>
    </main>
  )
}

function Input({ title, required, name, type = "text", error, ...ref }) {
  return <>
      <label>
          <p>{title} {required && <span>*</span>} </p>
          <input name={name} type={type}  {...ref} />

      </label>
      {error && <p className="error-text" style={{ paddingLeft: 230, marginTop: -20 }}>{error}</p>}
  </>
}
