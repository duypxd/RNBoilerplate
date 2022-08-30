import React from 'react';
import {
  StyleSheet,
  Text,
  GestureResponderEvent,
  TextProps,
  TextStyle,
} from 'react-native';

export interface RNTextProps extends TextProps {
  // type?: FontType;
  color?: string;
  center?: boolean;
  underLine?: boolean;
  style?: object;
  children?: React.ReactNode;
  mTop?: number;
  mBottom?: number;
  mLeft?: number;
  mRight?: number;
  mHoz?: number;
  mVer?: number;
  pVer?: number;
  pHoz?: number;
  pTop?: number;
  pBottom?: number;
  pLeft?: number;
  pRight?: number;
  flex?: number;
  margin?: number;
  lineHeight?: number;
  maxWidth?: string | number;
  minWidth?: string | number;
  fontWeight?: TextStyle['fontWeight'];
  fontSize?: number;
  lines?: number;
  w?: number | string;
  h?: number | string;
  onPress?: (event: GestureResponderEvent) => void;
  textAlign?: TextStyle['textAlign'];
}

const RNText = (props: RNTextProps) => {
  const {
    color,
    center,
    underLine,
    style,
    mTop,
    mBottom,
    mLeft,
    mRight,
    mHoz,
    pHoz,
    pBottom,
    pTop,
    pVer,
    pLeft,
    pRight,
    mVer,
    margin,
    flex,
    children,
    onPress,
    textAlign,
    lines,
    w,
    h,
    lineHeight,
    minWidth,
    maxWidth,
    fontWeight,
    fontSize = 14,
  } = props;

  return (
    <Text
      {...props}
      allowFontScaling={false}
      style={[
        // styles[type || 'text'],
        color && {color},
        styles.normal,
        underLine && styles.txtUnderline,
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        mHoz && {marginHorizontal: mHoz},
        mVer && {marginVertical: mVer},
        pHoz && {paddingHorizontal: pHoz},
        pBottom && {paddingBottom: pBottom},
        pTop && {paddingTop: pTop},
        pVer && {paddingVertical: pVer},
        pLeft && {paddingLeft: pLeft},
        pRight && {paddingRight: pRight},
        margin && {margin},
        flex && {flex},
        textAlign && {textAlign},
        center && styles.center,
        w && {width: w},
        h && {height: h},
        lineHeight && {lineHeight},
        minWidth && {minWidth},
        maxWidth && {maxWidth},
        style,
        fontWeight && {fontWeight},
        fontSize,
      ]}
      onPress={onPress && onPress}
      numberOfLines={lines}
    >
      {children}
    </Text>
  );
};
export const styles: any = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  txtUnderline: {
    textDecorationLine: 'underline',
  },
});

export default RNText;
