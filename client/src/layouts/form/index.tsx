'use client'

import { useState } from "react"

import FormCard from "./_components/card.layout"

export interface FormSlideTypes {
    data: {
        placeholder: string,
        type: string,
        label: string
    }[]
}

const FormSlide = ({data}: FormSlideTypes) => {
    const [formData, setFormData] = useState<any>({
        username: '',
        email: '',
        password: ''
    })

    console.log(formData)

    return (<div>
        {data.map((el, index) => {
            if(el.placeholder === 'username') {
               return (
                    <FormCard onChange={(el) => setFormData({...formData,})} placeholder={el.placeholder} type={el.type} label={el.label}/>
                )
            } else if(el.placeholder === 'email') {
                return (
                    <FormCard onChange={(el) => setFormData({email: el.target.value})} placeholder={el.placeholder} type={el.type} label={el.label}/>
                )
            }
        })}
    </div>)
}

export default FormSlide

