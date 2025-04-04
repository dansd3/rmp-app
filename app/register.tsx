import React from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import Checkbox from 'expo-checkbox'
import { RegisterViewModel } from '../viewmodels/registerViewModel'
import styles from '../styles/register'
import CustomInput from '../customcomponents/customInput'

export default function RegisterScreen() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    agree,
    setAgree,
    registerFunc,
    redirectLogin,
  } = RegisterViewModel()

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Text style={styles.title}>Регистрация</Text>
      <CustomInput
        placeholder="Имя пользователя"
        value={username}
        onChange={setUsername}
      />
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
        isValid={password.length >= 6}
      />
      <CustomInput
        placeholder="Повторите пароль"
        value={confirmPassword}
        onChange={setConfirmPassword}
        isPassword
        isValid={confirmPassword === password}
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={agree}
          onValueChange={setAgree}
        />
        <Text style={styles.checkboxLabel}>Согласен с правилами</Text>
      </View>
      <TouchableOpacity onPress={redirectLogin}>
        <Text style={styles.linkText}>Вернуться к входу</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={registerFunc}
      >
        <Text style={styles.registerButtonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  )
}
