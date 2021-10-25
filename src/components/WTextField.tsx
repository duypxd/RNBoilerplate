import React, { forwardRef, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import WText from './WText';
import WTouchable from './WTouchable';
import WView from './WView';

interface WTextFieldProps extends TextInputProps {
  label?: string;
  isSecureTextEntry?: boolean;
  style?: any;
  w?: number | string;
  h?: number | string;
  mHoz?: number;
  fill?: boolean;
  mVer?: number;
  pHoz?: number;
  pVer?: number;
  mLeft?: number;
  mRight?: number;
  mTop?: number;
  mBottom?: number;
  wrapperStyle?: any;
  errorMessage?: string;
  borderRadius?: number;
  borderWidth?: number;
  touched?: boolean;
  iconName?: string;
  currency?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  onPressRightIcon?: () => void;
}

const WTextField = (
  {
    errorMessage,
    touched,
    multiline = false,
    placeholder,
    value = '',
    keyboardType,
    label,
    iconName,
    returnKeyType,
    isSecureTextEntry = false,
    placeholderTextColor,
    style,
    w,
    h,
    fill,
    mHoz,
    mVer,
    pHoz,
    pVer,
    mLeft,
    mRight,
    mTop,
    mBottom,
    wrapperStyle,
    currency,
    onChangeText,
    onSubmitEditing,
    onPressRightIcon,
    textAlignVertical,
  }: WTextFieldProps,
  ref: any,
) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] =
    useState<boolean>(isSecureTextEntry);

  const onSetSecureTextEntry = () => setSecureTextEntry(!secureTextEntry);

  const onClearText = () => onChangeText('');

  return (
    <WView
      fill={fill}
      w={w}
      h={h}
      pVer={pVer}
      mLeft={mLeft}
      mRight={mRight}
      mTop={mTop}
      mBottom={mBottom}
      mVer={mVer}
      mHoz={mHoz}
      pHoz={pHoz}
      column
      justifyCenter
      style={[style]}>
      <WView
        borderColor={focused ? '#F55951' : 'rgba(0,0,0,0.1)'}
        borderWidth={1}
        borderRadius={12}
        w="100%"
        pHoz={16}
        h={56}
        column
        pVer={8}
        style={wrapperStyle}>
        {(focused || !!value) && label && (
          <WText type="regular12" color={'rgba(0,0,0,0.45)'} mBottom={1}>
            {label}
          </WText>
        )}
        <WView fill row alignCenter>
          <TextInput
            ref={ref as any}
            placeholder={placeholder}
            value={value}
            multiline={multiline}
            caretHidden={false}
            autoCorrect={false}
            allowFontScaling={false}
            blurOnSubmit={false}
            autoCapitalize="none"
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            placeholderTextColor={placeholderTextColor || 'rgba(0,0,0,0.45)'}
            secureTextEntry={secureTextEntry}
            style={[styles.textInput]}
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            textAlignVertical={textAlignVertical}
            spellCheck={false}
          />
          {currency && value ? (
            <WText
              color={'rgba(0,0,0,0.45)'}
              type="medium14">{` ${currency}`}</WText>
          ) : (
            <></>
          )}
          <WView row alignCenter mLeft={4}>
            {value?.length > 0 && focused && !isSecureTextEntry && (
              <WTouchable
                hit={16}
                mLeft={6}
                alignCenter
                justifyCenter
                borderRadius={10}
                mHoz={6}
                onPress={onClearText}>
                <WIcon
                  name="ic-close-fill"
                  color={'rgba(0,0,0,0.45)'}
                  size={19}
                />
              </WTouchable>
            )}
            {iconName && (
              <WTouchable
                hit={16}
                onPress={onPressRightIcon && onPressRightIcon}
                disabled={!onPressRightIcon}
                mLeft={6}>
                <WIcon name={iconName} color={'#818181'} size={24} />
              </WTouchable>
            )}
            {isSecureTextEntry && (
              <WTouchable hit={16} onPress={onSetSecureTextEntry} mLeft={6}>
                <WIcon
                  name={!secureTextEntry ? 'ic-eye-fill' : 'ic-eye-close-fill'}
                  color={'rgba(0,0,0,0.45)'}
                  size={22}
                />
              </WTouchable>
            )}
          </WView>
        </WView>
      </WView>
      {touched && errorMessage && (
        <WText type="regular12" color={'#F55951'} mTop={4}>
          {errorMessage}
        </WText>
      )}
    </WView>
  );
};

export default forwardRef(WTextField);

const styles = StyleSheet.create({
  textInput: {
    height: '100%',
    paddingVertical: 0,
    flex: 1,
  },
});
