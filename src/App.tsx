import image1 from './assets/image1.svg'
import image2 from './assets/image2.svg'
import person1 from './assets/person1.jpg'
import { data } from "./components/comment/comment"
import { FindRooms } from './templates/findrooms/findrooms'

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
      <FindRooms id='findform' 
        onClick={() => console.log('clicked')}
        title='Найдём номера под ваши пожелания' />
    </div>
  </>
}

