import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SignInScreen() {
  return (
    <View style={{
      flex: 1,
    }}>
      <Text>SignInScreen</Text>
      <Button title="Inscrever-se com Google" />
    </View>
  );
}