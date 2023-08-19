import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer() {
    return (
      <DrawerContentScrollView>
        <View>
          <Text>CustomDrawer</Text>
        </View>
      </DrawerContentScrollView>
    );
}