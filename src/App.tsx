import { DateInput } from "./components/datepicker/dateInput"
import { Dropdown } from "./components/dropdown/dropdown"
import { Input } from "./components/input/input"

export const App = () => {
  return (
    <div>
      <Input name="text field" type="email" placeholder="Email" />
      <DateInput />
      <Dropdown />
    </div>
  )
}

