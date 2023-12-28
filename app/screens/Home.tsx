import React from 'react'
import { View, Text, Button, ButtonText } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/elements' // Importe o HeaderBackButton do pacote de navegação apropriado

const CustomButton = ({ onPress, buttonText }) => {
  return (
    <Button onPress={onPress} size='md' style={styles.button}>
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  )
}

const Home = ({ navigation }: any) => {
  const { goBack } = useNavigation() // Obtém a função para voltar à tela anterior

  const navigateTo = routeName => {
    navigation.navigate(routeName)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>FIREBASE PRODUCTS</Text>
        <CustomButton
          onPress={() => navigateTo('Authentication')}
          buttonText='Navigate to Authentication'
        />
        <CustomButton
          onPress={() => navigateTo('')}
          buttonText='Cloud Firestore'
        />
        <CustomButton onPress={() => navigateTo('')} buttonText='Crashlytics' />
        <CustomButton
          onPress={() => navigateTo('')}
          buttonText='Remote-config'
        />
        <CustomButton
          onPress={() => navigateTo('')}
          buttonText='Push Notification'
        />
      </View>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  button: {
    width: 250,
    height: 40,
    marginVertical: 8,
  },
}

export default Home
