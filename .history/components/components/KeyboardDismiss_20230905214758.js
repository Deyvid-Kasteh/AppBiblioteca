import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import React from 'react'

export default function KeyboardDismiss({children}) {
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
      {children}
  </TouchableWithoutFeedback>
}