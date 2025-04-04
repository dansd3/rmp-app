import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

interface CustomInputProps {
  placeholder: string
  value: string
  onChange: (text: string) => void
  isPassword?: boolean
  isValid?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChange,
  isPassword,
}) => {
  const [secureText] = useState(isPassword)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
})

export default CustomInput
