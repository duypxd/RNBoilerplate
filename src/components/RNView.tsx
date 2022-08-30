/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ViewProps,
  FlexStyle,
  ActivityIndicator,
} from 'react-native';
import RNText from './RNText';

export interface RNViewProps extends ViewProps {
  flex?: number;
  zIndex?: number;
  textColor?: string;
  bgColorIndicator?: string;
  bgColorLoading?: string;
  loading?: boolean;
  children?: React.ReactNode;
  row?: boolean;
  column?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  center?: boolean;
  wrap?: boolean;
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
  minHeight?: number | string;
  minWidth?: number | string;
  color?: string;
  h?: number | string;
  w?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  borderTopWidth?: number;
  borderTopColor?: string;
  borderColor?: string;
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  alignSelf?: FlexStyle['alignSelf'];
  absolute?: boolean;
  opacity?: number;
  aTop?: number;
  aBottom?: number;
  aLeft?: number;
  aRight?: number;
  tabLabel?: string;
  margin?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomWidth?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomColor?: string;
  colors?: any;
  text?: string;
  relative?: boolean;
  indicatorColor?: string;
}

const RNView = ({
  flex,
  children,
  row,
  column,
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
  alignItems,
  alignSelf,
  absolute,
  opacity,
  margin,
  borderTopRightRadius,
  borderTopLeftRadius,
  borderBottomWidth,
  borderBottomColor,
  borderTopWidth,
  borderTopColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  wrap,
  loading,
  textColor,
  bgColorIndicator,
  bgColorLoading,
  colors,
  text,
  relative,
  minHeight,
  minWidth,
  aTop,
  aBottom,
  aLeft,
  aRight,
  zIndex,
  indicatorColor,
  ...more
}: RNViewProps) => {
  return (
    <View
      {...more}
      style={[
        flex && {flex},
        row && styles.row,
        column && styles.column,
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
        margin && {margin},
        borderBottomWidth && {borderBottomWidth},
        borderBottomColor && {borderBottomColor},
        borderTopWidth && {borderTopWidth},
        borderTopColor && {borderTopColor},
        borderTopRightRadius && {borderTopRightRadius},
        borderTopLeftRadius && {borderTopLeftRadius},
        borderBottomLeftRadius && {borderBottomLeftRadius},
        borderBottomRightRadius && {borderBottomRightRadius},
        color && {backgroundColor: color},
        h && {height: h},
        w && {width: w},
        minHeight && {minHeight: minHeight},
        minWidth && {minWidth: minWidth},
        borderRadius && {borderRadius: borderRadius},
        borderWidth && {borderWidth: borderWidth},
        borderColor && {borderColor: borderColor},
        justifyContent && {justifyContent: justifyContent},
        alignItems && {alignItems: alignItems},
        alignSelf && {alignSelf},
        absolute && {
          position: 'absolute',
          top: aTop,
          left: aLeft,
          right: aRight,
          bottom: aBottom,
        },
        zIndex && {zIndex},
        relative && {position: 'relative'},
        opacity && {opacity},
        wrap && {flexWrap: 'wrap'},
        style && style,
      ]}
    >
      {loading ? (
        <View
          style={[
            StyleSheet.absoluteFill,
            {backgroundColor: bgColorLoading},
            styles.loadingContainer,
          ]}
        >
          <View
            style={[
              styles.indicator,
              {
                backgroundColor:
                  bgColorIndicator || colors.toolbarBackgroundColor,
              },
            ]}
          >
            <ActivityIndicator
              size="large"
              color={indicatorColor || colors.primary}
            />
            {text ? (
              <RNText
                numberOfLines={2}
                style={[
                  styles.textLoading,
                  {color: textColor || colors.primaryText},
                ]}
              >
                {text}
              </RNText>
            ) : null}
          </View>
        </View>
      ) : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
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
  loadingContainer: {
    zIndex: 10000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    paddingHorizontal: 16,
  },
  textLoading: {
    fontSize: 12,
    paddingTop: 12,
    textAlign: 'center',
  },
});

export default RNView;
