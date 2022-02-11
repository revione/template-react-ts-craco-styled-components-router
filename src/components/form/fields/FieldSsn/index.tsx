// libraries
import { useEffect, useState } from "react"
import { UseFormReturn } from "react-hook-form"
// components
import { Flex, Text } from "@components"
// utils
import { formatToNumber } from "@utils/inputFormat"
// styles
import { Container, Input, Label } from "../styled"

interface FieldPros {
  name?: string
  label?: string
  placeholder?: string
  form: UseFormReturn
  onChange?: (e: any) => void | undefined
}

export const FieldSsn = ({
  name = "ssn",
  label = "last 4 numbers SSN",
  placeholder,
  form,
  onChange,
}: FieldPros) => {
  const {
    watch,
    formState: { errors },
    register,
  } = form

  const [isActive, setIsActive] = useState(false)

  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  useEffect(() => {
    const subscription = watch((value: any) => {
      if (value[name]) setIsActive(value[name].length > 0)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  useEffect(() => {
    if (placeholder) setIsActive(true)
  })

  const validation = {
    required: "phone number is required",
    minLength: {
      value: 16,
      message: "Set a valid number",
    },
  }

  const handleChange = (e: any) => {
    form.setValue(name, formatToNumber(e))
    onChange && onChange(e)
  }

  return (
    <Flex direction="column" gap={8}>
      <Container>
        <Input
          inputMode="numeric"
          type="text"
          placeholder={placeholder}
          maxLength={4}
          {...register(name, {
            ...validation,
            onChange: (e: any) => handleChange(e),
          })}
        />
        <Label isActive={isActive}>{label}</Label>
      </Container>
      {errors[name] && (
        <Text size={14} color="#E30000">
          {errors[name].message}
        </Text>
      )}
    </Flex>
  )
}
