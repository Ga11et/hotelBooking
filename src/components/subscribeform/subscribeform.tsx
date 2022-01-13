import { Field, Form, Formik } from "formik";
import { FC, HTMLInputTypeAttribute } from "react";
import css from './subscribeform.module.css'

type props = {
    placeholder?: string
    type: HTMLInputTypeAttribute


}

export const SubscribtionForm: FC<props> = ({ type, placeholder }) => {
    return <Formik
        initialValues={{ subsribe: '' }}
        onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values))
            setSubmitting(false)
        }}>
        <Form className={css.inputContainer} >
            <Field name={'subsribe'} type={'email'} placeholder={placeholder} />
            <svg viewBox="0 0 110 110" width={17} height={17}>
                <polyline points="55,8 105,58, 105,58 55,108"
                    stroke='#BC9CFF'
                    strokeWidth="12"
                    fill="none"
                />
                <line x1="0" y1="58" x2="100" y2="58"
                    stroke='#BC9CFF'
                    strokeWidth="12"
                />
            </svg>
        </Form>

    </Formik>
}