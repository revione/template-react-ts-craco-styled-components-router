// components
import { Field, FieldPros } from "../Field"
// utils
import { enforceFormat, formatToCode } from "@utils/inputFormat"

const FieldPhone = (props: FieldPros) => {
  const { name, form, onChange } = props

  const validation = {
    required: "",
  }

  const handleChange = (e: any) => {
    form.setValue(name, formatToCode(e))
    onChange && onChange(e)
  }

  const handleKeyDown = (e: any) => {
    return enforceFormat(e)
  }

  return (
    <Field
      minLength={6}
      maxLength={6}
      onKeyDown={(e) => handleKeyDown(e)}
      {...props}
      onChange={handleChange}
      validation={validation}
      type="text"
      inputMode="numeric"
    />
  )
}

export default FieldPhone
