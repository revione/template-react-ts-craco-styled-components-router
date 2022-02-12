// libraries
import { UseFormReturn } from "react-hook-form"
// components
import { Field } from "./Field"
// utils
import { formatToString } from "@utils"

interface FieldPros {
  name: string
  label?: string
  placeholder?: string
  validation?: any
  form: UseFormReturn
  maxLength?: number
}

const FieldString = ({
  name,
  label,
  placeholder,
  maxLength,
  validation,
  form,
}: FieldPros) => {
  //
  const handleChange = (e: any) => formatToString(e)

  return (
    <Field
      label={label}
      name={name}
      form={form}
      maxLength={maxLength}
      validation={validation}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default FieldString
