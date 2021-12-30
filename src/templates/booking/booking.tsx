import { Form, Formik } from "formik";
import { FC, useEffect, useState } from "react";
import { Button } from "../../components/button/button";
import { DateInput } from "../../components/datepicker/dateInput";
import { Dropdown } from "../../components/dropdown/dropdown";
import css from './booking.module.css'

type props = {
    isLux: boolean
    roomNumber: string
    price: number,
    discount: number,
    adds: number
}

export const Booking: FC<props> = ({ isLux, roomNumber, price, discount, adds }) => {

    const [days, setDays] = useState(0)
    const [result, setResult] = useState(price * days - discount + adds)

    useEffect(() => {
        setResult(price * days - discount + adds)
    },[days, price, discount, adds])

    const initialValues = { 
        bookingDate: {}, 
        bookingGuests: '',
        result: result
    }

    return <section className={css.bookingContainer}>
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values))
                setSubmitting(false)
            }}>
            {({ setSubmitting }) => <>
                <Form>
                    <div className={css.bookingHeader}>
                        <div className={css.roomNumber}>
                            <label className={css.numChar}>№ </label>
                            <label className={css.number}>{roomNumber} </label>
                            {isLux && <label className={css.lux}>люкс</label>}
                        </div>
                        <div className={css.perDay}>
                            <label className={css.price}>{price}₽</label>
                            <label> в сутки</label>
                        </div>
                    </div>
                    <DateInput id="bookingDate"
                        type="twoInputs"
                        name="bookingDate"
                        setDays={setDays}
                    />
                    <Dropdown id="bookingGuests"
                        name="bookingGuests"
                        title="гости"
                        type="buttons"
                    />
                    <div className={css.addInfoContainer}>
                        <div className={css.additionalInfo}>
                            <label>{price}₽ x {days} суток</label>
                            <label></label>
                            <label className={css.addPrice}>{price * days}₽</label>
                        </div>
                        <div className={css.additionalInfo}>
                            <label>Сбор за услуги: скидка {discount}₽</label>
                            <label><span>i</span></label>
                            <label className={css.addPrice}>-{discount}₽</label>
                        </div>
                        <div className={css.additionalInfo}>
                            <label>Сбор за дополнительные услуги</label>
                            <label><span>i</span></label>
                            <label className={css.addPrice}>{adds}₽</label>
                        </div>
                    </div>
                    <div className={css.resultContainer}>
                        <label>Итого</label>
                        <label className={css.between}></label>
                        <label>{result}₽</label>
                    </div>
                    <Button isSubmit
                        onClick={() => console.log('clicked')}
                        text="Забронировать"
                        type="big"
                    />
                </Form>
            </>}
        </Formik>


    </section>
}