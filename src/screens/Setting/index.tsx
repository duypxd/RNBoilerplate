import React from 'react';
import {useTheme} from '@react-navigation/native';

import RNText from '../../components/RNText';
import RNView from '../../components/RNView';

const SettingScreen = ({}) => {
  const {colors} = useTheme();
  return (
    <RNView flex={1} center color={colors.background}>
      <RNText color={colors.text}>SettingScreen</RNText>
    </RNView>
  );
};

export default SettingScreen;
