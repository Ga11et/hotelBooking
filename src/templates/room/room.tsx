import { FC } from "react";
import { RateButton } from "../../components/ratebutton/ratebutton";
import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react.js'
import { Navigation, Pagination } from 'swiper'
import '../../../node_modules/swiper/modules/pagination/pagination.scss'
import '../../../node_modules/swiper/modules/navigation/navigation.scss'
import '../../../node_modules/swiper/modules/effect-fade/effect-fade.scss'
import '../../../node_modules/swiper/swiper.scss'
import css from './room.module.css'
import './swiper.css'

type props = {
    isLux: boolean
    roomNumber: string
    price: number
    reviewsCount: number

    photos: string[]
}

export const Room: FC<props> = ({ isLux, roomNumber, price, reviewsCount, photos }) => {
    return <section className={css.roomContainer}>
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
        >
            {photos.map(el => <SwiperSlide key={el}>
                <img src={el} alt='roomPhoto' className={css.slider} />
            </SwiperSlide>)}
        </Swiper>
        <div className={css.roomInfo}>
            <div className={css.roomNumber}>
                <label className={css.numChar}>№ </label>
                <label className={css.number}>{roomNumber}</label>
                {isLux && <label className={css.lux}>люкс</label>}
            </div>
            <div className={css.perDay}>
                <label className={css.price}>{price}₽</label>
                <label> в сутки</label>
            </div>
        </div>
        <div className={css.roomReview}>


            <RateButton countStars={3} handleClick={(el) => console.log('clicked' + el)} />
            <div className={css.reviews}>
                <label className={css.number}>{reviewsCount} <label>Отзывов</label></label>
            </div>
        </div>
    </section>
}

