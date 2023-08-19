import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Avatar from '../../assets/Avatar/Avatar';

export default function CustomDrawer(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ alignSelf: "center" }}>
          <Avatar
            style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                marginRight: 15,
              },
            }}
          />
        </View>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    );
}