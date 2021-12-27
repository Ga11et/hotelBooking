import { BulletList } from "./components/bulletslist/bulletslist"
import { CheckBoxList } from "./components/checkboxList/checkboxlist"
import { DateInput } from "./components/datepicker/dateInput"
import { Dropdown } from "./components/dropdown/dropdown"
import { Input } from "./components/input/input"
import { Options } from "./components/options/options"
import { RichCkeckList } from "./components/richcheckboxlist/rickchecklist"
import image1 from './assets/image1.svg'
import image2 from './assets/image2.svg'
import { LikeButton } from "./components/likebutton/likebutton"

const richCheckboxData = [
  {label: 'Широкий коридор', describtion: 'Ширина коридоров в номере не менее 91 см.'},
  {label: 'Помощник для инвалидов', describtion: 'На 1 этаже вас встретит специалист  и проводит до номера.'},
]
const optionsData = [
  {image: image1, name: 'Комфорт', describtion: 'Шумопоглощающие стены'},
  {image: image2, name: 'Удобство', describtion: 'Окно в каждой из спален'}
]

export const App = () => {
  return (
    <div>
      <Input name="text field" type="email" placeholder="Email" />
      <DateInput id="dateInput" type="twoInputs" />
      <Dropdown type="buttons" id='first' />
      <Dropdown type="default" id='second' />
      <DateInput id="dateInputNext" type="oneInput" />
      <CheckBoxList id="list" name="expandable checkbox list" list={['Завтрак', 'Письменный стол', 'Стул для кормления', 'Кроватка']} />
      <RichCkeckList name="rich Checkbox Buttons" data={richCheckboxData} />
      <BulletList name="Bullet list" data={['Нельзя с питомцами', 'Без вечеринок и мероприятий', 'Время прибытия — после 13:00, а выезд до 12:00']} />
      <Options data={optionsData} />
      <LikeButton isTouched={false} likes={14} />
      <LikeButton isTouched={true} likes={8} />
    </div>
  )
}

