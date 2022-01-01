import image1 from './assets/image1.svg'
import image2 from './assets/image2.svg'
import person1 from './assets/person1.jpg'
import { data } from "./components/comment/comment"
import { Booking } from './templates/booking/booking'
import { Room } from './templates/room/room'
import room1 from './assets/room1.jpg'
import room2 from './assets/room2.jpg'
import room3 from './assets/room3.jpg'
import room4 from './assets/room4.jpg'
import { Header } from './templates/header/header'
import { Footer } from './templates/footer/footer'


const richCheckboxData = [
  { label: 'Широкий коридор', describtion: 'Ширина коридоров в номере не менее 91 см.' },
  { label: 'Помощник для инвалидов', describtion: 'На 1 этаже вас встретит специалист  и проводит до номера.' },
]
const optionsData = [
  { image: image1, name: 'Комфорт', describtion: 'Шумопоглощающие стены' },
  { image: image2, name: 'Удобство', describtion: 'Окно в каждой из спален' }
]
const commentData: data = {
  avatar: person1,
  isTouched: true,
  likes: 12,
  message: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
  name: 'Мурад Сарафанов',
  publication: new Date(2021, 11, 20)
}

export const App = () => {
  return <>
    <div>
      <Header isAuth userName='Юлий Цезарь' />
      <Header isAuth={false} />
      <Booking isLux price={9990} 
        roomNumber='888'
        adds={300}
        discount={2179} />
      <Room isLux roomNumber='888' 
        price={9990}
        reviewsCount={145}
        photos={[room1, room2, room3, room4]} />
      <Footer  />
    </div>
  </>
}

