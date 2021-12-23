import { DateInput } from "./components/datepicker/dateInput"
import { Input } from "./components/input/input"

export const App = () => {
  return (
    <div>
      <Input name="text field" type="email" placeholder="Email" />
      <DateInput />
    </div>
  )
}

