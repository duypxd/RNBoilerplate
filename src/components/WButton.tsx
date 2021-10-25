import React from 'react';
import { ActivityIndicator } from 'react-native';

import type { ThemesApp } from '../themes/Colors';
import { useTheme } from '../themes/ThemeContext';

import WIcon, { TypeIcon } from './WIcon';
import WText from './WText';
import WView from './WView';
import WTouchable, { WTouchableProps } from './WTouchable';

interface WButtonProps extends WTouchableProps {
  title?: string;
  onPress: any;
  textColor?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: object;
  children?: object;
  type?: string;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  typeIcon?: TypeIcon;
}

const WButton = (props: WButtonProps) => {
  const {
    children,
    loading,
    disabled,
    title,
    onPress,
    style,
    iconName,
    iconColor,
    iconSize = 24,
    textColor,
    type,
    typeIcon = 'MaterialIcons',
  } = props || {};
  const Colors: ThemesApp = useTheme().Colors;
  return (
    <WTouchable
      pVer={14}
      borderRadius={12}
      h={48}
      w="100%"
      justifyCenter
      alignCenter
      disabled={disabled}
      color={props.color || Colors.primary}
      style={style}
      {...props}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.white} />
      ) : (
        <>
          {children || (
            <WView row fill>
              {iconName && (
                <WIcon
                  name={iconName}
                  color={iconColor || Colors.text}
                  size={iconSize}
                  type={typeIcon}
                />
              )}
              <WText
                lineHeight={20}
                type={type || 'regular16'}
                color={textColor || Colors.white}
                mLeft={iconName ? 6 : 0}>
                {title}
              </WText>
            </WView>
          )}
        </>
      )}
    </WTouchable>
  );
};

export default WButton;
