import styled from "styled-components"

export const Input = styled.input<{
  wrongCode?: boolean
  isBasic?: boolean
  align?: string
}>`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: ${({ align = "start" }) => align};

  padding: ${({ isBasic }) =>
    isBasic ? "18.5px 16px 16.5px 16px" : "5px 26px 5px 16px"};

  width: 100%;
  height: 52px;
  margin: 0 auto;
  background: white;
  border-radius: 4px;

  border: 1px solid ${({ wrongCode }) => (wrongCode ? "#E30000" : "black")};

  &::placeholder {
    color: #818181;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Label = styled.label<{ isActive?: boolean }>`
  font-size: 14px;
  color: #999;
  display: flex;

  align-items: center;
  pointer-events: none;

  padding: 0px 16px 10px 16px;

  text-align: center;

  position: absolute;
  transform: translate(0, 20px) scale(1);

  ${({ isActive }) => isActive && `transform: translate(4px, 8px) scale(0.75);`}

  transform-origin: top left;
  transition: all 0.2s ease-out;

  ${Input}:focus ~ & {
    transform: translate(4px, 8px) scale(0.75);
  }
`
