import styled from "styled-components";

export const PaddingWrapper = styled.div`
  padding: ${({ right, left, top, bottom, global }) =>
    (global && global + "px") ||
    `${(top || "0") + "px"} ${(right || "0") + "px"} ${
      (bottom || "0") + "px"
    } ${(left || "0") + "px"}`};
`;
