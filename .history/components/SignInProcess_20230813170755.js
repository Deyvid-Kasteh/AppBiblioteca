import { View, Text } from 'react-native'
import React from 'react'
import SignInGoogle from './GoogleSignIn/SignInGoogle'

export default function SignInProcess() {
const signInResult = SignInGoogle()

  return (
    <View>
      <Text>SignInProcess</Text>
    </View>
  )
}