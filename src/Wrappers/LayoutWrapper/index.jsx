import styled from "styled-components";

export const LayoutWrapper = styled.div`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  background: ${({ background }) => background};
`;
