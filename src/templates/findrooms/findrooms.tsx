import { Form, Formik } from "formik";
import { FC } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/button/button";
import { DateInput } from "../../components/datepicker/dateInput";
import { Dropdown } from "../../components/dropdown/dropdown";
import css from './findrooms.module.css'

type props = {
    id: string
    title: string

    onClick: (dates: { start: null;    end: null;}, guests: { first: number;    second: number;    third: number;}) => void
}

export const FindRooms: FC<props> = ({ id, title, onClick }) => {

    const navigate = useNavigate()

    return <section className={css.findRoomsContainer}>
        <Formik
            initialValues={{ findRooms: { start: null, end: null}, guests: { first: 0, second: 0, third: 0} }}
            onSubmit={(values, { setSubmitting }) => {
                onClick(values.findRooms, values.guests)
                navigate('/filter', {replace: true})
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, submitForm }) => (
                <Form>
                    <h1>{title}</h1>
                    <DateInput id={id + 'findrooms'} type="twoInputs" name="findRooms" />
                    <Dropdown id={id + 'guests'} type="buttons" title='гости' name="guests" />
                    <Button type="big" text="подобрать номер" onClick={() => null} isSubmit />
                </Form>
            )}
        </Formik>
        <div className={css.contentContainer}>
            
        </div>
    </section>
}