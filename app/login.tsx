import React from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import { LoginViewModel } from '../viewmodels/loginViewModel'
import styles from '../styles/login'
import CustomInput from '../customcomponents/customInput'
export default function LoginScreen() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginFunc,
    redirectRegister,
  } = LoginViewModel()

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Text style={styles.title}>Вход</Text>
      <CustomInput
        placeholder="E-mail"
        value={email}
        onChange={setEmail}
      />
      <CustomInput
        placeholder="Пароль"
        value={password}
        onChange={setPassword}
        isPassword
      />

      <TouchableOpacity onPress={redirectRegister}>
        <Text style={styles.linkText}>Нет аккаунта? Зарегистрируйтесь</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={loginFunc}
      >
        <Text style={styles.loginButtonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  )
}
