import { FC, useState } from "react";
import css from './dateInput.module.css'
import $ from 'jquery'
import DatePicker, { registerLocale } from 'react-datepicker'
import { Input } from "../input/input";
import ru from 'date-fns/locale/ru'
import { format } from 'date-fns'

registerLocale('ru', ru)

type props = {
    id: string
}

type date = Date | null

export const DateInput: FC<props> = ({ id }) => {

    const today = new Date()
    const tomorow = new Date(today.getFullYear(), today.getMonth() + 1, today.getDay())
    console.log(tomorow)

    const [dates, setDates] = useState<{start: date, end: date}>( () => ({ start: today, end: tomorow }))

    const openDataPicker = () => {
        $('#' + id).slideDown(400, 'swing')
    }
    const closeDataPicker = () => {
        $('#' + id).slideUp(400, 'swing')
    }

    const onChange = (dates: [date, date]) => {
        console.table(dates)
        const [start, end] = dates;
        setDates({ start: start, end: end })
    };

    return <div className={css.field} style={{ width: '40%' }} >
        <div className={css.dates}>
            <Input value={dates.start != null ? format(dates.start, 'yyyy-MM-dd') : undefined}
                id="leftDateInput"
                placeholder="ДД.ММ.ГГГГ"
                readonly
                type='date'
                name="Прибытие"
                onFocus={openDataPicker}
                isWithIndicator
                />
            <Input value={dates.end != null ? format(dates.end, 'yyyy-MM-dd') : undefined}
                id="rightDateInput"
                placeholder="ДД.ММ.ГГГГ"
                type='date'
                readonly
                name="Выезд" 
                onFocus={openDataPicker}
                isWithIndicator
                />
        </div>
        <div id={id} className={css.datePickerContainer} >
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
                {JSON.stringify(dates) !== JSON.stringify({ start: new Date(), end: null }) ? <button className={css.clear}
                        onClick={() => setDates({ start: today, end: tomorow })}>
                        очистить</button> : <div></div>}
                <button className={css.apply}
                    onClick={closeDataPicker}>
                    применить</button>
            </div>
        </div>
    </div>
}