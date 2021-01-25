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
        let errorObject = {}

        function submit() {
            let {rule, message} = validate;


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
