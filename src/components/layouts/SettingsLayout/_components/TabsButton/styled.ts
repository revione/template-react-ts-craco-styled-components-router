import styled from "styled-components"

export const TabButton = styled.div`
  cursor: pointer;
  padding: 10px;
  text-align: "center";
  border-radius: 8px;
  color: #707070;
  user-select: none;
  height: 39px;

  &.active {
    background-color: #f6f6f6;
    color: #000000;
  }
`

export const Hr = styled.hr`
  margin: 0;
  border: 1px solid #ededed;
  opacity: 0.4;
`
