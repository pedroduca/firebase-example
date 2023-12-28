import React from 'react'
import {
  View,
  Text,
  Input,
  InputField,
  Button,
  ButtonText,
} from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'

const Authentication = () => {
  const navigation = useNavigation()

  const handleLogin = () => {
    // Lógica de login aqui
  }

  return (
    <View style={styles.container}>
      <Input style={styles.input}>
        <InputField placeholder='E-mail' />
      </Input>
      <Input style={styles.input}>
        <InputField placeholder='Senha' type='password' />
      </Input>
      <Button onPress={handleLogin} size='md' style={styles.button}>
        <ButtonText>Login</ButtonText>
      </Button>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 40,
  },
}

export default Authentication
