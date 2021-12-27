import { BulletList } from "./components/bulletslist/bulletslist"
import { CheckBoxList } from "./components/checkboxList/checkboxlist"
import { DateInput } from "./components/datepicker/dateInput"
import { Dropdown } from "./components/dropdown/dropdown"
import { Input } from "./components/input/input"
import { RichCkeckList } from "./components/richcheckboxlist/rickchecklist"

const richCheckboxData = [
  {label: 'Широкий коридор', describtion: 'Ширина коридоров в номере не менее 91 см.'},
  {label: 'Помощник для инвалидов', describtion: 'На 1 этаже вас встретит специалист  и проводит до номера.'},
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
    </div>
  )
}

