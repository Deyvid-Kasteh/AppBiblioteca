import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import React from 'react'

const KeyboardDismiss = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

exp


