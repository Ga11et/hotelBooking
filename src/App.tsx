import { DateInput } from "./components/datepicker/dateInput"
import { Dropdown } from "./components/dropdown/dropdown"
import { Input } from "./components/input/input"

export const App = () => {
  return (
    <div>
      <Input name="text field" type="email" placeholder="Email" />
      <DateInput id="dateInput" />
      <Dropdown type="buttons" id='first' />
      <Dropdown type="default" id='second' />
    </div>
  )
}

