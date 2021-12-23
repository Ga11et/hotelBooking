import { FC, useState } from "react";
import css from './dateInput.module.css'
import $ from 'jquery'
import DatePicker, { registerLocale } from 'react-datepicker'
import { Input } from "../input/input";
import ru from 'date-fns/locale/ru'

registerLocale('ru', ru)

type props = {

}

type date = Date | null

export const DateInput: FC<props> = ({}) => {

    const [startDate, setStartDate] = useState<date>(new Date())
    const [endDate, setEndDate] = useState<date>(null)

    const onChange = (dates: [date, date]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      };

    return <div className={css.field}>
        <div className={css.dates}>
            <Input id="leftDateInput" placeholder="ДД.ММ.ГГГГ" type='date' name="Прибытие" onFocus={() => $('#leftDateInput').hide()} />
            <Input id="rightDateInput" placeholder="ДД.ММ.ГГГГ" type='date' name="Выезд" />
            <DatePicker
                locale='ru'
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                />
        </div>
    </div>
}