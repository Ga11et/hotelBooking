import { Field, Form, Formik } from "formik";
import { FC, HTMLInputTypeAttribute, KeyboardEventHandler } from "react";
import css from './subscribeform.module.css'

type props = {
    placeholder?: string
    type: HTMLInputTypeAttribute


}

export const SubscribtionForm: FC<props> = ({ type, placeholder }) => {
    return <Formik
        initialValues={{ subsribe: '' }}
        onSubmit={( values, { setSubmitting }) => {
            alert(JSON.stringify(values))
            setSubmitting(false)
        }}>
            <Form className={css.inputContainer} >
                <Field name={'subsribe'} type={'email'} placeholder={placeholder} />
            </Form>
        
    </Formik>
}