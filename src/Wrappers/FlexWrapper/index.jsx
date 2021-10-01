import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  flex-wrap: ${({ flexFlow }) => flexFlow || "wrap"};
`;
