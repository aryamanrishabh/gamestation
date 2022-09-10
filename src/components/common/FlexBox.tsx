import styled from "styled-components";

interface Props {
  margin?: string;
  padding?: string;
  column?: boolean;
  align?: string;
  justify?: string;
  rowGap?: string;
  colGap?: string;
  cursor?: string;
}

const FlexBox = styled.div<Props>`
  display: flex;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  row-gap: ${({ rowGap }) => rowGap || 0};
  column-gap: ${({ colGap }) => colGap || 0};
  cursor: ${({ cursor }) => cursor || "auto"};
`;

export default FlexBox;
