import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View>
          <DrawerItemList />
        </View>
      </DrawerContentScrollView>
    );
}