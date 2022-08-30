/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  FlexStyle,
  TouchableOpacityProps,
} from 'react-native';

export interface RNTouchableProps extends TouchableOpacityProps {
  relative?: boolean;
  flex?: number;
  absolute?: boolean;
  zIndex?: number;
  aTop?: number;
  aBot?: number;
  aLeft?: number;
  aRight?: number;
  children?: React.ReactNode;
  row?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  center?: boolean;
  style?: any;
  mTop?: number | string;
  mBottom?: number | string;
  mLeft?: number | string;
  mRight?: number | string;
  pTop?: number | string;
  pBottom?: number | string;
  pLeft?: number | string;
  pRight?: number | string;
  pHoz?: number | string;
  pVer?: number | string;
  mHoz?: number | string;
  mVer?: number | string;
  color?: string;
  borderBottomWidth?: number;
  borderBottomColor?: string;
  h?: number | string;
  w?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  alignSelf?: FlexStyle['alignSelf'];
  hit?: number;
  column?: boolean;
  minHeight?: number | string;
  minWidth?: number | string;
  borderTopWidth?: number;
  borderTopColor?: string;
}

const RNTouchable = ({
  flex,
  children,
  row,
  alignCenter,
  justifyCenter,
  center,
  style,
  mTop,
  mBottom,
  mLeft,
  mRight,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHoz,
  pVer,
  mHoz,
  mVer,
  color,
  h,
  w,
  borderRadius,
  borderWidth,
  borderColor,
  justifyContent,
  borderBottomWidth,
  borderBottomColor,
  alignItems,
  alignSelf,
  onPress,
  activeOpacity,
  hit,
  absolute,
  aTop,
  aBot,
  aLeft,
  aRight,
  zIndex,
  column,
  relative,
  minHeight,
  minWidth,
  borderTopWidth,
  borderTopColor,
  ...more
}: RNTouchableProps) => {
  return (
    <TouchableOpacity
      {...more}
      style={[
        flex && {flex},
        row && styles.row,
        relative && {position: 'relative'},
        alignCenter && styles.alignCenter,
        justifyCenter && styles.justifyCenter,
        center && styles.center,
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        pTop && {paddingTop: pTop},
        pBottom && {paddingBottom: pBottom},
        pLeft && {paddingLeft: pLeft},
        pRight && {paddingRight: pRight},
        pHoz && {paddingHorizontal: pHoz},
        pVer && {paddingVertical: pVer},
        mHoz && {marginHorizontal: mHoz},
        mVer && {marginVertical: mVer},
        color && {backgroundColor: color},
        h && {height: h},
        w && {width: w},
        minHeight && {minHeight: minHeight},
        minWidth && {minWidth: minWidth},
        column && styles.column,
        borderRadius && {borderRadius: borderRadius},
        borderWidth && {borderWidth: borderWidth},
        borderTopWidth && {borderTopWidth},
        borderTopColor && {borderTopColor},
        borderColor && {borderColor: borderColor},
        justifyContent && {justifyContent: justifyContent},
        alignItems && {alignItems: alignItems},
        alignSelf && {alignSelf},
        borderBottomWidth && {borderBottomWidth},
        borderBottomColor && {borderBottomColor},
        absolute && {
          position: 'absolute',
          top: aTop,
          bottom: aBot,
          left: aLeft,
          right: aRight,
        },
        zIndex && {zIndex},
        style,
      ]}
      hitSlop={{
        top: hit || 0,
        bottom: hit || 0,
        left: hit || 0,
        right: hit || 0,
      }}
      onPress={onPress && onPress}
      activeOpacity={activeOpacity || 0.3}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
});

export default RNTouchable;
