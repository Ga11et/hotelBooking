import { CheckBoxList } from "./components/checkboxList/checkboxlist"
import { DateInput } from "./components/datepicker/dateInput"
import { Dropdown } from "./components/dropdown/dropdown"
import { Input } from "./components/input/input"

export const App = () => {
  return (
    <div>
      <Input name="text field" type="email" placeholder="Email" />
      <DateInput id="dateInput" type="twoInputs" />
      <Dropdown type="buttons" id='first' />
      <Dropdown type="default" id='second' />
      <DateInput id="dateInputNext" type="oneInput" />
      <CheckBoxList id="list" name="expandable checkbox list" list={['Завтрак', 'Письменный стол', 'Стул для кормления', 'Кроватка']} />
    </div>
  )
}

