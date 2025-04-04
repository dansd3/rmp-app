import { useState } from 'react'
import { Alert } from 'react-native'
import { useRouter } from 'expo-router'
import { getUsers, setSession, User } from '../models/storage'

export const LoginViewModel = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const loginFunc = async () => {
    const users = await getUsers()
    const user = users.find(
      (u: User) => u.email === email && u.password === password,
    )

    if (!user) {
      Alert.alert('Ошибка', 'Неверный email или пароль')
      return
    }

    await setSession(true)
    router.replace({ pathname: '/home', params: { username: user.username } })
  }
  const redirectRegister = async () => {
    router.replace('/register')
  }
  return {
    email,
    setEmail,
    password,
    setPassword,
    loginFunc,
    redirectRegister,
  }
}
