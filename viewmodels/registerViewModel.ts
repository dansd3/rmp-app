import { useState } from 'react'
import { Alert } from 'react-native'
import { useRouter } from 'expo-router'
import { saveUser, setSession } from '../models/storage'

export const RegisterViewModel = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const router = useRouter()

  const registerFunc = async () => {
    if (username.length < 3) {
      Alert.alert(
        'Ошибка',
        'Имя пользователя должно содержать не менее 3 символов',
      )
      return
    }
    if (!email.includes('@')) {
      Alert.alert('Ошибка', 'Введите корректный e-mail')
      return
    }
    if (password.length < 6) {
      Alert.alert('Ошибка', 'Пароль должен быть не менее 6 символов')
      return
    }
    if (password !== confirmPassword) {
      Alert.alert('Ошибка', 'Пароли не совпадают')
      return
    }
    if (!agree) {
      Alert.alert('Ошибка', 'Вы должны согласиться с правилами')
      return
    }

    await saveUser({ username, email, password })
    await setSession(true)
    router.replace('/home')
  }
  const redirectLogin = async () => {
    router.replace('/login')
  }
  return {
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
  }
}
