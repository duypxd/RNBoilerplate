import React from 'react';
import {useTheme} from '@react-navigation/native';

import RNText from '../../components/RNText';
import RNView from '../../components/RNView';

const RegisterScreen = ({}) => {
  const {colors} = useTheme();
  return (
    <RNView flex={1} center color={colors.background}>
      <RNText color={colors.text}>RegisterScreen</RNText>
    </RNView>
  );
};

export default RegisterScreen;
