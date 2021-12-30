import React from 'react';
import {Text as RNText} from 'react-native';
import {fontSizes, fonts, colors} from '../../theme';
import styled from 'styled-components/native';

import {
  textAlign,
  lineHeight,
  fontSize,
  letterSpacing,
  color,
  space,
  flexWrap,
  width,
  fontFamily,
  borderWidth,
  borderColor,
  alignSelf,
  onPress,
  fontWeight,
  background,
  paddingLeft,
} from 'styled-system';

const Text = styled.Text`
  ${textAlign}
  ${lineHeight}
  ${fontSize}
  ${letterSpacing}
  ${color}
  ${space}
  ${flexWrap}
  ${width}
  ${fontFamily}
  ${borderWidth}
  ${borderColor}
  ${alignSelf}
  ${onPress}
  ${fontWeight}
  ${background}
  ${paddingLeft}
`;

const HeadingText = props => {
  return (
    <Text
      fontSize={fontSizes[9]}
      color={colors.Black}
      letterSpacing={0.3}
      {...props}
    />
  );
};
const SubHeadingText = props => {
  return (
    <Text
      fontSize={fontSizes[4]}
      color={colors.Black}
      letterSpacing={0.3}
      {...props}
    />
  );
};
const NormalText = props => (
  <Text
    fontSize={fontSizes[2]}
    color={colors.Black}
    letterSpacing={0.3}
    {...props}
  />
);

export {NormalText, HeadingText, SubHeadingText};
