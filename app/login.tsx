import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { loginViewModel } from '../viewmodels/loginViewModel';
import styles from "../styles/login";

export default function LoginScreen() {
  const { 
    email, 
    setEmail, 
    password, 
    setPassword, 
    loginFunc,
    redirectRegister } = loginViewModel();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      <Text style={styles.title}>Вход</Text>
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
      <TouchableOpacity onPress={redirectRegister}>
        <Text style={styles.linkText}>Нет аккаунта? Зарегистрируйтесь</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={loginFunc}>
        <Text style={styles.loginButtonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
}
