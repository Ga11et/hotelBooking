import { Form, Formik } from "formik";
import { FC } from "react";
import { Button } from "../../components/button/button";
import { DateInput } from "../../components/datepicker/dateInput";
import { Dropdown } from "../../components/dropdown/dropdown";
import css from './findrooms.module.css'

type props = {
    id: string
    title: string

    onClick: () => void
}

export const FindRooms: FC<props> = ({ id, title, onClick }) => {
    return <section className={css.findRoomsContainer}>
        <Formik
            initialValues={{ findRooms: {}, guests: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <h1>{title}</h1>
                    <DateInput id={id + 'findrooms'} type="twoInputs" name="findRooms" />
                    <Dropdown id={id + 'guests'} type="buttons" title='гости' name="guests" />
                    <Button type="big" text="подобрать номер" onClick={onClick} isSubmit />
                </Form>
            )}
        </Formik>
        <div className={css.contentContainer}>
            
        </div>
    </section>
}