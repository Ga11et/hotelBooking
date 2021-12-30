import { Form, Formik } from "formik";
import { FC } from "react";
import { Button } from "../../components/button/button";
import { FieldInput } from "../../components/fieldInput/fieldInput";
import { FieldRadioButton } from "../../components/fieldRadioInput/fieldradiobutton";
import { FieldToggleButton } from "../../components/fieldtoggle/fieldtogglebutton";
import { Input } from "../../components/input/input";
import { RadioButton } from "../../components/radiobutton/radiobutton";
import { ToggleButton } from "../../components/togglebutton/togglebutton";
import { format } from 'date-fns'
import css from './register.module.css'

type props = {
    title: string
}

type registerData = {
    name: string
    surname: string
    sex: 'male' | 'female'
    burthdate: string
    email: string
    password: string
    isSpecs: boolean
}

export const Register: FC<props> = ({ title }) => {

    const initialValues: registerData = {
        name: '',
        surname: '',
        sex: 'male',
        burthdate: '',
        email: '',
        password: '',
        isSpecs: false,


    }

    return <section className={css.registerContainer}>
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values));
                setSubmitting(false);
            }}>
            {({ setSubmitting }) => <>
                <Form>
                    <h1>{title}</h1>
                    <div className={css.doubleInputs}>
                        <FieldInput name="name" type='text' 
                            placeholder="Имя" fieldType="default" />
                        <FieldInput name="surname" type='text' 
                            placeholder="Фамилия" fieldType="default" />
                    </div>
                    <FieldRadioButton label="Мужчина" name="sex" value="male" />
                    <FieldRadioButton label="Женщина" name="sex" value="female"/>
                    <FieldInput name="burthdate" type='date' 
                        fieldType='masked' title="дата рождения" />
                    <div className={css.doubleInputs}>
                        <FieldInput name="email" type='email' placeholder="Email" 
                            fieldType="default" title="данные для входа в сервис" />
                        <FieldInput name="password" type='password' 
                            placeholder="Пароль" fieldType="default" />
                    </div>
                    <FieldToggleButton label="Получать спецпредложения" name="isSpecs" />
                    <Button type="big" 
                        text="Перейти к оплате" 
                        isSubmit 
                        onClick={() => console.log('clicked')} />
                    <div className={css.isAccauntExist}>
                        <p>Уже есть аккаунт на Toxin</p>
                        <Button onClick={() => console.log('clicked')}
                            type="empty" isSubmit={false}
                            text="Войти" />
                    </div>
                </Form>
            </>}

        </Formik>
    </section>
}