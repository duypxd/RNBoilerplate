import { Alert } from 'react-native';

interface PropConfirm {
  style?: string;
  title?: string;
  message?: string;
  confirmationText?: string;
  dismissText?: string;
  onPress: () => void;
  onCancel?: () => void;
}

export const showAlertMessage = (message: string, title: string, onPress = (): void => { }) =>
  Alert.alert(title, message?.split(':')?.pop() || message, [{ text: 'OK', onPress }], {
    cancelable: true,
  });

export const showConfirmationAlert = ({
  title,
  message,
  confirmationText,
  dismissText = 'Cancel',
  onPress,
  onCancel,
  style = 'cancel',
}: PropConfirm) => {
  let actions: any = [
    {
      text: confirmationText,
      style,
      onPress,
    },
  ];
  onCancel ? actions.push({ text: dismissText, onPress: onCancel }) : actions;

  Alert.alert(title || '', message?.split(':')?.pop() || message, actions, {
    cancelable: false,
  });
};
