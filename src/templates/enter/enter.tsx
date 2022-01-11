import { Form, Formik } from "formik";
import { FC } from "react";
import { Button } from "../../components/button/button";
import { FieldInput } from "../../components/fieldInput/fieldInput";
import css from './enter.module.css'

type props = {
    title: string
}

export const Login: FC<props> = ({ title }) => {

    const initialValues = {
        email: '',
        password: ''
    }

    return <section className={css.enterContainer}>
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values))
                setSubmitting(false)
            }}>
            {({ setSubmitting }) => <>
                <Form>
                    <h1>{title}</h1>
                    <div className={css.doubleInputs}>
                        <FieldInput fieldType="default"
                            name="email"
                            type='email'
                            placeholder="Email" />
                        <FieldInput fieldType="default"
                            name="password"
                            type='password'
                            placeholder="Пароль" />
                    </div>
                    <Button text="Войти"
                        isSubmit
                        onClick={() => console.log('clicked')}
                        type="big" />
                    <div className={css.isAccauntExist}>
                        <p>Уже есть аккаунт на Toxin</p>
                        <Button onClick={() => console.log('clicked')}
                            type="empty" isSubmit={false}
                            text="Создать" />
                    </div>
                </Form>
            </>}

        </Formik>
    </section>
}