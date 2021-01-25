import React, { useState } from 'react'

let patternEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let patternURL = /(ftp|http|https):\/\/www.facebook.com(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
let patternPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;


export default function useValidateForm(initialValue, validate) {
       let [form, setForm] = useState(initialValue)

        function inputChange(event) {
            setForm({
                ...form,
                [event.target.getAttribute('name')]: event.target.value
            })
        }
        let [error, setError] = useState({});
       

        function submit() {
            document.querySelectorAll('error').forEach(e => e.classList.removeClass('error'))
            let {rule, message} = validate;
            let errorObject = {}

            for(let i in rule){
                let r = rule[i];

                if(r.required){
                    if(!form[i]){
                        errorObject[i] = message?.[i]?.required || 'Trường này không được để trống'
                    }
                }

                if(r.pattern){
                    let pattern = r.pattern
                    if(pattern === 'email') pattern = patternEmail
                    if(pattern === 'phone') pattern = patternPhone
                    if(pattern === 'url')    pattern = patternURL
                    if(!pattern.test(form[i])){
                        errorObject[i] = message?.[i]?.pattern || 'Trường này đúng định dạng'
                    }
                }
                if(r.min && form[i]?.length < r.min){
                    errorObject[i] = message?.[i]?.min || `Trường này phải dài hơn ${r.min} kí tự`
                }
                if(r.max && form[i]?.length > r.max){
                    errorObject[i] = message?.[i]?.max || `Trường này không được dài hơn ${r.max} kí tự`
                }
                for(let i in errorObject ){
                    document.querySelector(`[name="${i}"]`).classList.add('error');
                }
            }
            setError(errorObject);
            return errorObject
        }

       return {
            form,
            inputChange,
            error,
            submit
       }
}
