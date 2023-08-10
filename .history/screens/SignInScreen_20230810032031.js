import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignInScreen({ promptAsync }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>SignInScreen</Text>
      <Button title="Inscrever-se com Google" onPress={async() => promptAsync()} />
      <TouchableOpacity>
        <Text>SignInScreen</Text>
      </TouchableOpacity>
    </View>
  );
}