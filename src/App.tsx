import image1 from './assets/image1.svg'
import image2 from './assets/image2.svg'
import person1 from './assets/person1.jpg'
import { data } from "./components/comment/comment"
import { Header } from './templates/header/header'
import { Footer } from './templates/footer/footer'
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/landing'
import { Filter } from './pages/filter/filter'
import { useState } from 'react'
import { RegisterPage } from './pages/register/register'
// const Landing = React.lazy(() => import('./pages/landing/landing'));




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

const App = () => {

  const [dates, setDates] = useState({start: null, end: null})
  const [guests, setGuests] = useState({first: 0, second: 0, third: 0})

  

  return <>
    <Header isAuth={false} />
    <Routes>
      <Route path='/landing' element={<Landing setDates={setDates} setGuests={setGuests} />} />
      <Route path='/filter' element={<Filter dates={dates} guests={guests} />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
    <Footer />
  </>
}

export default App

