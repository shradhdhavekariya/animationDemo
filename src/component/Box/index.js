import styled from 'styled-components/native';
import {
  alignSelf,
  alignItems,
  alignContent,
  justifyContent,
  width,
  height,
  flex,
  borderColor,
  left,
  right,
  top,
  bottom,
  borderBottom,
  borderRadius,
  borderLeft,
  borderRight,
  borderWidth,
  borderTop,
  background,
  elevation,
  space,
  overflow,
  flexGrow,
  zIndex,
} from 'styled-system';

const Box = styled.View`
  ${alignSelf}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${width}
  ${height}
  ${flex}
  ${borderColor}
  ${left}
  ${right}
  ${top}
  ${bottom}
  ${borderBottom}
  ${borderRadius}
  ${borderLeft}
  ${borderRight}
  ${borderWidth}
  ${borderTop}
  ${background}
  ${flex}
  ${elevation}
  ${space}
  ${overflow}
  ${flexGrow}
  ${zIndex}
`;

export default Box;
