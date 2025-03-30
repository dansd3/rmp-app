import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Checkbox from 'expo-checkbox';
import { registerViewModel } from '../viewmodels/registerViewModel';
import styles from "../styles/register";

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
    redirectLogin
  } = registerViewModel();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <Text style={styles.title}>Регистрация</Text>
      <TextInput
        style={styles.input}
        placeholder="Имя пользователя"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Повторите пароль"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <View style={styles.checkboxContainer}>
        <Checkbox value={agree} onValueChange={setAgree} />
        <Text style={styles.checkboxLabel}>Согласен с правилами</Text>
      </View>
      <TouchableOpacity onPress={redirectLogin}>
        <Text style={styles.linkText}>Вернуться к входу</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={registerFunc}>
        <Text style={styles.registerButtonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};