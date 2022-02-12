// libraries
import { useEffect, useState } from "react"
import { Controller, UseFormReturn } from "react-hook-form"
// components
import { Flex, Text } from "@components"
// styles
import { Container, Label } from "../../styled"
import "react-datepicker/dist/react-datepicker.css"
import { DataPicker } from "./styled"

interface FieldPros {
  name: string
  label: string
  form: UseFormReturn
  validation?: any
  required?: any
}

const DataPickerField = ({
  name,
  label,
  form,
  validation,
  required,
}: FieldPros) => {
  const {
    watch,
    formState: { errors },
    control,
  } = form

  const [isActive, setIsActive] = useState(false)

  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  useEffect(() => {
    const subscription = watch((value: any) => {
      setIsActive(String(value[name]).length > 0)
    })
    return () => subscription.unsubscribe()
  }, [name, watch])

  return (
    <Flex direction="column" gap={8}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Container>
            <DataPicker onChange={onChange} onBlur={onBlur} selected={value} />
            <Label isActive={isActive}>{label}</Label>
          </Container>
        )}
        rules={{
          required: required && required,
          ...validation,
        }}
      />
      {errors[name] && (
        <Text size={14} color="#E30000">
          {errors[name].message}
        </Text>
      )}
    </Flex>
  )
}

export default DataPickerField
