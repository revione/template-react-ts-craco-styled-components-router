// libraries
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
// components
import { Flex, Text } from "@components"
// styles
import { Container, Input } from "../../styled"
import { IconEye, PassWrapper } from "./styled"

interface FieldPros {
  name: string
  placeholder?: string
  validation?: any
  form: UseFormReturn
  maxLength?: number
}

const FieldPassword = ({
  name,
  placeholder,
  maxLength,
  validation,
  form,
}: FieldPros) => {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  const {
    register,
    formState: { errors },
  } = form

  return (
    <Flex direction="column" gap={8}>
      <Container>
        <PassWrapper>
          <Input
            isBasic={true}
            type={passwordShown ? "text" : "password"}
            maxLength={maxLength}
            placeholder={placeholder}
            {...register(name, validation)}
          />
          <IconEye onClick={togglePasswordVisiblity}>
            {passwordShown ? (
              <img src="/icons/eye-on.svg" alt="Eye-on" />
            ) : (
              <img src="/icons/eye-off.svg" alt="Eye-off" />
            )}
          </IconEye>
        </PassWrapper>
      </Container>
      {errors[name] && (
        <Text size={14} color="#E30000">
          {errors[name].message}
        </Text>
      )}
    </Flex>
  )
}

export default FieldPassword
