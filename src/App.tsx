import { BulletList } from "./components/bulletslist/bulletslist"
import { CheckBoxList } from "./components/checkboxList/checkboxlist"
import { DateInput } from "./components/datepicker/dateInput"
import { Dropdown } from "./components/dropdown/dropdown"
import { Input } from "./components/input/input"
import { Options } from "./components/options/options"
import { RichCkeckList } from "./components/richcheckboxlist/rickchecklist"
import image1 from './assets/image1.svg'
import image2 from './assets/image2.svg'
import person1 from './assets/person1.jpg'
import { Comment, data } from "./components/comment/comment"

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
  return (
    <div>
      <Input fieldType="default" name="text field" type="email" placeholder="Email" />
      <DateInput id="dateInput" type="twoInputs" />
      <Dropdown type="buttons" id='first' />
      <Dropdown type="default" id='second' />
      <DateInput id="dateInputNext" type="oneInput" />
      <CheckBoxList id="list" name="expandable checkbox list" list={['Завтрак', 'Письменный стол', 'Стул для кормления', 'Кроватка']} />
      <RichCkeckList name="rich Checkbox Buttons" data={richCheckboxData} />
      <BulletList name="Bullet list" data={['Нельзя с питомцами', 'Без вечеринок и мероприятий', 'Время прибытия — после 13:00, а выезд до 12:00']} />
      <Options data={optionsData} />
      <Comment data={commentData} />
    </div>
  )
}

