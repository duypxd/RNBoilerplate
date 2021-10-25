import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type TypeIcon =
  | 'AntDesign'
  | 'Feather'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons';

interface WIconProps {
  type: TypeIcon;
  name: string;
  color: string;
  size: number;
  style?: any;
}

const WIcon = ({ type, name, size, color, style }: WIconProps) => {
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

export default WIcon;
