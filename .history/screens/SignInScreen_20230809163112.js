import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SignInScreen() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>SignInScreen</Text>
      <Button title="Inscrever-se com Google" />
      <Touop></Touop>
    </View>
  );
}