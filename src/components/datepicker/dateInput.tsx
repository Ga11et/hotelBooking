import { ChangeEventHandler, FC, useEffect, useState } from "react";
import css from './dateInput.module.css'
import $ from 'jquery'
import DatePicker, { registerLocale } from 'react-datepicker'
import { Input } from "../input/input";
import ru from 'date-fns/locale/ru'
import { format } from 'date-fns'
import { Field, FieldProps } from "formik";

registerLocale('ru', ru)

type props = {
    id: string
    name: string
    type: 'oneInput' | 'twoInputs'

    startValues?: { start: date, end: date }
    title?: string
    setDays?: (days: number) => void
    submitForm?: (() => Promise<void>) & (() => Promise<any>)
}

type date = Date | null

export const DateInput: FC<props> = ({ name, id, type, setDays, title, submitForm, startValues }) => {

    const today = new Date()
    const tomorrow = new Date(today.getFullYear(), today.getMonth() + 1, today.getDay())

    const [dates, setDates] = useState<{ start: date, end: date }>( startValues ? () => (startValues)  : () => ({ start: null, end: null }) )

    useEffect(() => {
        if (setDays && dates.start !== null && dates.end !== null) {
            setDays(dates.end.getDate() - dates.start.getDate())
        }
    }, [dates, setDays])
    

    const openDataPicker = () => {
        $('#' + id).slideDown(400, 'swing')
    }
    const closeDataPicker = () => {
        $('#' + id).slideUp(400, 'swing')
    }
    const onChange = (dates: [date, date]) => {
        const [start, end] = dates;
        setDates({ start: start, end: end })
    }
    const oneInputValue = (dates: { start: date, end: date }) => {
        return `${dates.start != null
            ? format(dates.start, 'dd MMM', { locale: ru })
            : format(today, 'dd MMM', { locale: ru })} - ${dates.end != null
                ? format(dates.end, 'dd MMM', { locale: ru })
                : format(today, 'dd MMM', { locale: ru })}`
    }

    return <div className={css.field} >
        <Field name={name} >
            {({ form: { setFieldValue } }: FieldProps) => {

                const closeDataPickerAlt = () => {
                    setFieldValue(name, dates)
                    if (submitForm) {
                        submitForm()
                    }
                    closeDataPicker()
                }

                return <>
                    {type === 'twoInputs' ? <div className={css.dates}>
                        <Input fieldType="default"
                            customValue={dates.start != null ? format(dates.start, 'yyyy-MM-dd') : 'ДД.ММ.ГГГГ'}
                            id="leftDateInput"
                            readonly
                            type='text'
                            title="Прибытие"
                            onFocus={openDataPicker}
                            isWithIndicator
                        />
                        <Input fieldType="default" customValue={dates.end != null ? format(dates.end, 'yyyy-MM-dd') : 'ДД.ММ.ГГГГ'}
                            id="rightDateInput"
                            type='text'
                            readonly
                            title="Выезд"
                            onFocus={openDataPicker}
                            isWithIndicator
                        />
                    </div>
                        : <div>
                            <Input fieldType="default" customValue={oneInputValue(dates)}
                                id="leftDateInput"
                                readonly
                                type='text'
                                title={title}
                                onFocus={openDataPicker}
                                isWithIndicator
                            />
                        </div>}
                    <div id={id} className={css.datePickerContainer} style={{ display: 'none' }}  >
                        <DatePicker
                            locale='ru'
                            selected={dates.start}
                            onChange={onChange}
                            startDate={dates.start}
                            endDate={dates.end}
                            selectsRange
                            inline
                        />

                        {/* Buttons */}

                        <div className={css.buttons}>
                            {JSON.stringify(dates) !== JSON.stringify({ start: new Date(), end: null })
                                ? <button className={css.clear}
                                    type="button"
                                    onClick={() => setDates({ start: today, end: tomorrow })}>
                                    очистить</button> : <div></div>}
                            <button className={css.apply}
                                type="button"
                                onClick={closeDataPickerAlt}>
                                применить</button>
                        </div>
                    </div>
                </>
            }}
        </Field>




    </div>
}