import { Field, FieldPros } from "./Field"

interface EmailField extends FieldPros {
  requiredTextValidation?: string
  emailTextValidation?: string
}

const FieldEmail = (props: EmailField) => {
  const {
    name,
    validation,
    form,
    onChange,
    requiredTextValidation = "Please enter an email",
    emailTextValidation = "Please enter a valid email",
  } = props

  const emailValidation = {
    required: requiredTextValidation,
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-.]{2,})+$/,
      message: emailTextValidation,
    },
    ...validation,
  }

  const handleChange = (e: any) => {
    form.setValue(name, e.target.value)
    onChange && onChange(e)
  }

  return (
    <Field {...props} onChange={handleChange} validation={emailValidation} type="email"/>
  )
}

export default FieldEmail
