import React from 'react';
import styled from 'styled-components/native';
import {
  textAlign,
  lineHeight,
  letterSpacing,
  color,
  space,
  flexWrap,
  width,
  fontFamily,
  borderWidth,
  borderColor,
  alignSelf,
  alignItems,
  justifyContent,
  borderRadius,
  fontSize,
  flexDirection,
  background,
  zIndex,
} from 'styled-system';
import {NormalText} from '../Text';

const Btn = styled.TouchableOpacity`
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
  ${space}
  ${flexWrap}
  ${width}
  ${fontFamily}
  ${borderWidth}
  ${borderColor}
  ${alignSelf}
  ${alignItems}
  ${justifyContent}
  ${borderRadius}
  ${fontSize}
  ${flexDirection}
  ${background}
  ${color}
  ${zIndex}
`;

const Button = props => {
  const {text, textStyle, children, color, style, fontSize, ...rest} = props;
  return (
    <Btn letterSpacing={0.3} {...rest} alignItems={'center'} style={style}>
      {text && (
        <NormalText
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}
          style={textStyle}>
          {text}
        </NormalText>
      )}
      {children}
    </Btn>
  );
};
export default Button;
