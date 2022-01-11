import { commentDataType } from "./components/comment/comment"
import { Header } from './templates/header/header'
import { Footer } from './templates/footer/footer'
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/landing'
import { Filter } from './pages/filter/filter'
import { useState } from 'react'
import { RegisterPage } from './pages/register/register'
import { LoginPage } from './pages/login/login'
import { RoomDetailsPage } from './pages/roomdetails/roomdetails'
// const Landing = React.lazy(() => import('./pages/landing/landing'));

// details
import comfortImage from './assets/roomDetails/comfort.svg'
import convenienceImage from './assets/roomDetails/convenience.svg'
import cosinessImage from './assets/roomDetails/cosiness.svg'
import person1 from './assets/roomDetails/person1.png'
import person2 from './assets/roomDetails/person2.png'
import { roomInfoDataType } from './components/options/options';
import roomImage1 from './assets/room1.jpg'
import roomImage2 from './assets/room2.jpg'
import roomImage3 from './assets/room4.jpg'

const ModOneCondition = (value: number) => {
  return value % 10 === 1 && (value > 20 || value < 10)
}
const ValueCondition = (value: number) => {
  return value % 10 > 4 || value % 10 === 0 || (value < 20 && value > 10)
} 
export const ValueWithConditions = (value: number, optionOne: string, optionsTwo: string, optionThree: string) => {
  return value.toString() + (ModOneCondition(value) ? optionOne : (ValueCondition(value) ? optionsTwo : optionThree))
}

const today = new Date()




const roomsInfoData: roomInfoDataType[] = [
  { image: comfortImage, title: 'Комфорт', description: 'Шумопоглощающие стены' },
  { image: convenienceImage, title: 'Удобство', description: 'Окно в каждой из спален' },
  { image: cosinessImage, title: 'Уют', description: 'Номер оснащён камином' }
]
const commentsData: commentDataType[] = [
  {
  avatar: person1,
  isTouched: true,
  likes: 12,
  message: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
  name: 'Мурад Сарафанов',
  publication: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5)
  },
  {
    avatar: person2,
    isTouched: false,
    likes: 2,
    message: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    name: 'Патрисия Стёклышкова',
    publication: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 8)
  }
]
const rulesData = [
  'Нельзя с питомцами',
  'Без вечеринок и мероприятий',
  'Время прибытия — после 13:00, а выезд до 12:00'
]
const roomImages = [
  roomImage1, roomImage2, roomImage3
]

const App = () => {

  const [dates, setDates] = useState({start: null, end: null})
  const [guests, setGuests] = useState({first: 0, second: 0, third: 0})

  

  return <>
    <Header isAuth={false} />
    <Routes>
      <Route path='/landing' element={<Landing setDates={setDates} setGuests={setGuests} />} />
      <Route path='/filter' element={<Filter dates={dates} guests={guests} />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/room' element={<RoomDetailsPage
                                      roomInfo={roomsInfoData} 
                                      commentsData={commentsData} 
                                      rules={rulesData} 
                                      images={roomImages} 
                                      impressions={{best: 130, good: 65, normal: 65, bad: 0, total: 260}}
                                      />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
    <Footer />
  </>
}

export default App

