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
    type: 'oneInput' | 'twoInputs'
}

type date = Date | null

export const DateInput: FC<props> = ({ id, type }) => {

    const today = new Date()
    const tomorrow = new Date(today.getFullYear(), today.getMonth() + 1, today.getDay())
    console.log(tomorrow)

    const [dates, setDates] = useState<{start: date, end: date}>( () => ({ start: today, end: tomorrow }))

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
    }
    const oneInputValue = (dates: {start: date, end: date}) => {
        return `${dates.start != null 
            ? format(dates.start, 'dd MMM', {locale: ru}) 
            : format(today, 'dd MMM', {locale: ru})} - ${dates.end != null 
                ? format(dates.end, 'dd MMM', {locale: ru}) 
                : format(today, 'dd MMM', {locale: ru})}`
    }

    return <div className={css.field} >
        {type==='twoInputs' ? <div className={css.dates}>
            <Input value={dates.start != null ? format(dates.start, 'yyyy-MM-dd') : format(today, 'yyyy-MM-dd')}
                id="leftDateInput"
                readonly
                type='date'
                name="Прибытие"
                onFocus={openDataPicker}
                isWithIndicator
                />
            <Input value={dates.end != null ? format(dates.end, 'yyyy-MM-dd') : format(tomorrow, 'yyyy-MM-dd')}
                id="rightDateInput"
                type='date'
                readonly
                name="Выезд" 
                onFocus={openDataPicker}
                isWithIndicator
                />
        </div>
        : <div>
             <Input value={oneInputValue(dates)}
                id="leftDateInput"
                readonly
                type='text'
                name="Дата пребывания"
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
                {JSON.stringify(dates) !== JSON.stringify({ start: new Date(), end: null }) ? <button className={css.clear}
                        onClick={() => setDates({ start: today, end: tomorrow })}>
                        очистить</button> : <div></div>}
                <button className={css.apply}
                    onClick={closeDataPicker}>
                    применить</button>
            </div>
        </div>
    </div>
}