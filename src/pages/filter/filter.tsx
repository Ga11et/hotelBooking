import { Form, Formik } from "formik";
import { FC } from "react";
import { Checkbox } from "../../components/checkbox/checkbox";
import { CheckBoxList } from "../../components/checkboxList/checkboxlist";
import { DateInput } from "../../components/datepicker/dateInput";
import { Dropdown } from "../../components/dropdown/dropdown";
import { RichCkeckList } from "../../components/richcheckboxlist/rickchecklist";
import { MySlider } from "../../components/slider/slider";
import css from './filter.module.css'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'
import room3 from '../../assets/room3.jpg'
import room4 from '../../assets/room4.jpg'
import { Room } from "../../templates/room/room";
import { Paginator } from "../../components/pagination/paginator";

type props = {
    dates: {start: Date | null, end: Date | null}
    guests: {first: number, second: number, third: number}
}

export const Filter: FC<props> = ({ dates, guests }) => {

    const richCheckboxData = [
        { id: '1', label: 'Широкий коридор', describtion: 'Ширина коридоров в номере не менее 91 см.' },
        { id: '2', label: 'Помощник для инвалидов', describtion: 'На 1 этаже вас встретит специалист  и проводит до номера.' },
    ]
    const additionsData = ['Завтрак','Письменный стол','Стул для кормления','Кроватка','Телевизор','Шампунь','Телевизор','Шампунь']

    const initialValues = {

    }

    return <main className={css.filterContainer}>
        <nav className={css.navContainer}>
            <Formik
                initialValues={initialValues}
                onSubmit={( values, { setSubmitting }) => {
                    alert(JSON.stringify(values))
                    setSubmitting(false)
                }}>
                <Form>
                    <DateInput
                        id="dates"
                        name="dates"
                        type="oneInput"
                        title="даты пребывания в отеле"
                    />
                    <Dropdown
                        id="guests"
                        name="guests"
                        type="buttons"
                        title="гости"
                    />
                    <MySlider name="price" title="диапазон цены" />
                    <CheckBoxList id="rights"
                        name="rights"
                        title="правила дома"
                        type="default"
                        list={['Можно курить','Можно с питомцами','Можно пригласить гостей (до 10 человек)']}/>
                    <RichCkeckList data={richCheckboxData} 
                        name="availability"
                        title="доступность"
                    />
                    <Dropdown id="conveniences"
                        name="conveniences"
                        title="Удобства номера"
                        type="default"
                    />
                    <CheckBoxList id="additions" 
                        list={additionsData}
                        name="additions"
                        title="дополнительные удобства"
                        type="withDropdawn"
                    />
                </Form>
            </Formik>
        </nav>
        <section className={css.contentContainer}>  
            <h1>Номера, которые мы для вас подобрали</h1>
            <div className={css.rooms}>
                <Room isLux
                    photos={[room1, room2, room3, room4]}
                    price={9999}
                    reviewsCount={123}
                    roomNumber="888"

                />
                <Room isLux
                    photos={[room1, room2, room3, room4]}
                    price={9999}
                    reviewsCount={123}
                    roomNumber="888"

                />
                <Room isLux
                    photos={[room1, room2, room3, room4]}
                    price={9999}
                    reviewsCount={123}
                    roomNumber="888"

                />
                <Room isLux
                    photos={[room1, room2, room3, room4]}
                    price={9999}
                    reviewsCount={123}
                    roomNumber="888"

                />
                <Room isLux
                    photos={[room1, room2, room3, room4]}
                    price={9999}
                    reviewsCount={123}
                    roomNumber="888"

                />
                <Room isLux
                    photos={[room1, room2, room3, room4]}
                    price={9999}
                    reviewsCount={123}
                    roomNumber="888"

                />
                <Room isLux
                    photos={[room1, room2, room3, room4]}
                    price={9999}
                    reviewsCount={123}
                    roomNumber="888"

                />
                <Room isLux
                    photos={[room1, room2, room3, room4]}
                    price={9999}
                    reviewsCount={123}
                    roomNumber="888"

                />
                <Room isLux
                    photos={[room1, room2, room3, room4]}
                    price={9999}
                    reviewsCount={123}
                    roomNumber="888"

                />
                <Room isLux
                    photos={[room1, room2, room3, room4]}
                    price={9999}
                    reviewsCount={123}
                    roomNumber="888"

                />
                
            </div>
            <Paginator handlePageClick={() => console.log('clicked')}
                pageCount={10}
            />
        </section>
    </main>
}