// libraries
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Link = styled(LinkRouter)`
  position: relative;
  text-decoration: none;
  color: #005fda;

  &:hover {
    color: #004cff;

    &:after {
      width: 100%;
      left: 0;
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 50%;
    width: 0%;
    height: 1px;
    background: #4596ff;
    transition: all 0.25s linear;
  }
`;
