import { FC, useState } from "react";
import css from './dateInput.module.css'
import $ from 'jquery'
import DatePicker, { registerLocale } from 'react-datepicker'
import { Input } from "../input/input";
import ru from 'date-fns/locale/ru'
import { format } from 'date-fns'

registerLocale('ru', ru)

type props = {

}

type date = Date | null

export const DateInput: FC<props> = ({ }) => {

    const [startDate, setStartDate] = useState<date>(new Date())
    const [endDate, setEndDate] = useState<date>(null)

    const onChange = (dates: [date, date]) => {
        console.table(dates)
        const [start, end] = dates;
        if (end !== null) {
            $('.react-datepicker').attr('style', () => 'display: none' )
        }
        setStartDate(start);
        setEndDate(end);
    };

    return <div className={css.field}>
        <div className={css.dates}>
            <Input value={startDate != null ? format(startDate, 'yyyy-MM-dd') : undefined}
                id="leftDateInput"
                placeholder="ДД.ММ.ГГГГ"
                readonly
                type='date'
                name="Прибытие"
                onFocus={() => $('.react-datepicker').attr('style', () => 'display: inline-block' )}
                // onBlur={() => $('.react-datepicker').hide()}
                />
            <Input value={endDate != null ? format(endDate, 'yyyy-MM-dd') : undefined}
                id="rightDateInput"
                placeholder="ДД.ММ.ГГГГ"
                type='date'
                readonly
                name="Выезд" 
                onFocus={() => $('.react-datepicker').attr('style', () => 'display: inline-block' )}
                // onBlur={() => $('.react-datepicker').hide()}
                />
        </div>
        <DatePicker
                id="datePicker"
                locale='ru'
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />
    </div>
}