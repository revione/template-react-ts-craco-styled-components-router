// libraries
import { useEffect, useState } from "react"
import { UseFormReturn } from "react-hook-form"
// components
import { Flex, Text } from "@components"
// styles
import { Container, Input, Label } from "../styled"

export interface FieldPros {
  form: UseFormReturn
  name: string
  label?: string
  validation?: any
  placeholder?: string
  required?: string | boolean
  type?: "text" | "number" | "email" | "password" | "tel"
  minLength?: number
  maxLength?: number
  disabled?: boolean
  align?: "center" | "left" | "right"
  onChange?: (e: any) => void
  onKeyDown?: (e: any) => void
  inputMode?:
    | "text"
    | "search"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined
}

export const Field = ({
  form,
  name,
  label,
  validation,
  required,
  onChange,
  onKeyDown,
  type = "text",
  inputMode = "text",
  ...rest
}: FieldPros) => {
  const {
    register,
    formState: { errors },
    watch,
  } = form

  const [isActive, setIsActive] = useState(false)

  const handleChange = (e: any) => {
    onChange && onChange(e)
  }

  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  useEffect(() => {
    const subscription = watch(
      (value: any) => value[name] && setIsActive(value[name].length > 0)
    )
    return () => subscription.unsubscribe()
  }, [name, watch])

  return (
    <Flex direction="column" gap={8} style={{ width: "100%" }}>
      <Container>
        <Input
          isBasic={!label}
          type={type}
          onKeyDown={onKeyDown}
          wrongCode={errors[name]}
          inputMode={inputMode}
          {...rest}
          {...register(name, {
            required: required && required,
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
