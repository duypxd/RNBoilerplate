import React from 'react';
import {useTheme} from '@react-navigation/native';

import RNText from '../../components/RNText';
import RNView from '../../components/RNView';

const HomeScreen = ({}) => {
  const {colors} = useTheme();
  return (
    <RNView flex={1} center color={colors.background}>
      <RNText color={colors.text}>HomeScreen</RNText>
    </RNView>
  );
};

export default HomeScreen;
