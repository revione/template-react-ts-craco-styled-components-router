import styled from "styled-components"

export const Container = styled.div<{
  display?: string
  padding?: string
  justify?: string
  align?: string
}>`
  padding: ${({ padding = "0px" }) => padding};
  align-items: ${({ align = "normal" }) => align};
  display: ${({ display = "block" }) => display};
  justify-content: ${({ justify = "normal" }) => justify};
`
//  search
export const Input = styled.input`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px;

  width: 257px;
  height: 42px;

  background: white;
  border: 1px solid #ededed;
  box-sizing: border-box;
  border-radius: 8px;
`
