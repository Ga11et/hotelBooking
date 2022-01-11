import { FC } from "react";
import { ValueWithConditions } from "../../App";
import { BulletList } from "../../components/bulletslist/bulletslist";
import { Comment, commentDataType } from "../../components/comment/comment";
import { roomInfoDataType, Options } from "../../components/options/options";
import { Booking } from "../../templates/booking/booking";
import css from './roomdetails.module.css'
import { PieChart } from 'react-minimal-pie-chart'

type impressionsType = {best: number, good: number, normal: number, bad: number, total: number}
type pieChartDataType = { value: number, color: string}
type props = {
    images: string[]
    roomInfo: roomInfoDataType[]
    commentsData: commentDataType[]
    rules: string[]
    impressions: impressionsType
}


export const RoomDetailsPage: FC<props> = ({ images, roomInfo, commentsData, rules, impressions }) => {
    
    let pieChartData = []
    if (impressions.best != 0) {pieChartData.push({ value: impressions.best, color: '#FFE39C' })}
    if (impressions.normal != 0) {pieChartData.push({ value: impressions.normal, color: '#BC9CFF' })}
    if (impressions.good != 0) {pieChartData.push({ value: impressions.good, color: '#6FCF97' })}
    if (impressions.bad != 0) {pieChartData.push({ value: impressions.bad, color: '#909090' })}


    return <main className={css.roomDetailsContainer}>
        <section className={css.images}>
            <img src={images[0]} alt='roomImage' className={css.image1} />
            <img src={images[1]} alt='roomImage' className={css.image2} />
            <img src={images[2]} alt='roomImage' className={css.image3} />
        </section>
        <section className={css.roomDetails}>
            <section className={css.details}>
                <div className={css.upper}>
                    <Options
                        data={roomInfo}
                        title="Сведения о номере"
                    />
                    <div></div>
                    <div className={css.pieChartContainer}>
                        <h2>Впечатления о номере</h2>
                        <div className={css.pieChartContentContainer}>
                            <div className={css.pieChart}>
                                <PieChart
                                    data={pieChartData}
                                    lineWidth={6}
                                    paddingAngle={3}
                                    animate
                                    startAngle={90}
                                />
                                <div className={css.totalImpressions}>
                                    <label>{impressions.total}</label>
                                    <label className={css.bottom}>голосов</label>
                                </div>
                            </div>
                            <div className={css.legend}>
                                <label><span style={{ backgroundColor: '#FFE39C' }}></span>Великолепно</label>
                                <label><span style={{ backgroundColor: '#6FCF97' }}></span>Хорошо</label>
                                <label><span style={{ backgroundColor: '#BC9CFF' }}></span>Удовлетворительно</label>
                                <label><span style={{ backgroundColor: '#909090' }}></span>Разочарован</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.middle}>
                    <h2>Отзывы посетителей номера</h2>
                    {commentsData.map(el => <Comment
                        data={el}
                        key={el.name}
                    />)}
                    <label>{ValueWithConditions(commentsData.length, ' отзыв', ' отзыва', ' отзыва')}</label>
                </div>
                <div className={css.under}>
                    <BulletList
                        title="Правила"
                        data={rules}
                    />
                    <div></div>
                    <div className={css.cancel}>
                        <h2>Отмена</h2>
                        <p>
                            Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.
                        </p>
                    </div>
                </div>
            </section>
            <section className={css.booking}>
                <Booking
                    adds={300}
                    discount={2179}
                    isLux
                    price={9990}
                    roomNumber="888"
                />
            </section>

        </section>
    </main>
}