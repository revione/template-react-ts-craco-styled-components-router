// utils
import { formatToPhone } from "@utils/inputFormat"
// components
import { Field, FieldPros } from "../Field"

const FieldPhone = (props: FieldPros) => {
  const { name, form, onChange } = props

  const validation = {
    required: "phone number is required",
    minLength: {
      value: 16,
      message: "Set a valid number",
    },
  }

  const handleChange = (e: any) => {
    form.setValue(name, formatToPhone(e))
    onChange && onChange(e)
  }

  return <Field {...props} onChange={handleChange} validation={validation} type="tel"/>
}

export default FieldPhone
