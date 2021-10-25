import React, { useRef } from 'react';
import { Keyboard, StyleSheet } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import WView from '../components/WView';
import WTextField from '../components/WTextField';

import type { ThemesApp } from '../themes/Colors';
import { useTheme } from '../themes/ThemeContext';
import WButton from '../components/WButton';
import { showAlertMessage } from '../utils/alert';
import axios from '../api/axios';

const Login = ({}) => {
  const queryClient = useQueryClient();
  const Colors: ThemesApp = useTheme().Colors;
  const _refPassword = useRef<any>(null);

  const formik = useFormik({
    initialValues: {
      email: __DEV__ ? 'xuanduyrn@gmail.com' : '',
      password: __DEV__ ? '12345678' : '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email must be a valid address')
        .required('Email is a required field')
        .lowercase(),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(30, 'Password can’t exceed 30 characters')
        .required('Password is a required field'),
    }),
    onSubmit: body => {
      mutationSignIn.mutate(body);
    },
  });

  const onSubmitEditing = (ref: any, isDone?: boolean) => (): void => {
    if (isDone) {
      Keyboard.dismiss();
      formik.handleSubmit();
    } else {
      ref?.current?.focus();
    }
  };

  const mutationSignIn = useMutation(
    async (body: any) => await axios.post('api/auth/signIn', body),
    {
      onError: () => {
        showAlertMessage('An unexpected error occurred.', 'Oops!');
      },
      onSuccess: data => {
        if (data?.data && !data?.data?.status) {
          showAlertMessage(data?.data?.errMessage, 'Oops!');
        }
        if (data?.status) {
          queryClient.setQueryData('Auth', data);
        }
      },
    },
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: Colors.background }]}>
      <WView fill justifyCenter pHoz={24}>
        <WTextField
          returnKeyType="next"
          keyboardType="email-address"
          label={'Email'}
          placeholder={'Enter email address'}
          value={formik.values.email}
          errorMessage={formik.errors.email}
          touched={formik.touched.email}
          onChangeText={formik.handleChange('email')}
          style={styles.appInput}
          onSubmitEditing={onSubmitEditing(_refPassword)}
        />
        <WTextField
          ref={_refPassword}
          returnKeyType="done"
          keyboardType="default"
          label={'Password'}
          placeholder={'Enter password'}
          errorMessage={formik.errors.password}
          touched={formik.touched.password}
          isSecureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onSubmitEditing={onSubmitEditing(null, true)}
        />
        <WButton
          title={'Login'}
          onPress={formik.handleSubmit}
          disabled={mutationSignIn.isLoading}
          loading={mutationSignIn.isLoading}
          mTop={24}
        />
      </WView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appInput: {
    marginBottom: 16,
    marginTop: 16,
  },
});
