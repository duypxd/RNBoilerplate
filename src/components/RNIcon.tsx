import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type RNIconType =
  | 'AntDesign'
  | 'Feather'
  | 'MaterialIcons'
  | 'Ionicons'
  | 'MaterialCommunityIcons';

interface RNIconProps {
  type: RNIconType;
  name: string;
  color: string;
  size: number;
  style?: any;
}

const RNIcon = ({type, name, size, color, style}: RNIconProps) => {
  if (type === 'AntDesign') {
    return <AntDesign name={name} size={size} color={color} style={style} />;
  }
  if (type === 'Feather') {
    return <Feather name={name} size={size} color={color} style={style} />;
  }
  if (type === 'MaterialIcons') {
    return (
      <MaterialIcons name={name} size={size} color={color} style={style} />
    );
  }
  if (type === 'Ionicons') {
    return <Ionicons name={name} size={size} color={color} style={style} />;
  }
  if (type === 'MaterialCommunityIcons') {
    return (
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={color}
        style={style}
      />
    );
  }
  return <></>;
};

export default RNIcon;
