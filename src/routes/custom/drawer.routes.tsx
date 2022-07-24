// External libraries
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useTheme } from 'styled-components/native'

// Screens
import List from '../../screens/List'
import Edit from '../../screens/Edit'
import Add from '../../screens/Add'
import Search from '../../screens/Search'
import Settings from '../../screens/Settings'

const Drawer = createDrawerNavigator()

function DrawerRoutes() {
  const { colors } = useTheme()
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
        drawerActiveTintColor: colors.primary,
        headerStyle: {
          backgroundColor: colors.backgroundColorItem,
        },
        drawerStyle: {
          backgroundColor: colors.backgroundColorItem,
        },
        drawerInactiveTintColor: colors.default,
      }}>
      <Drawer.Screen name="List" component={List} />
      <Drawer.Screen name="Edit" component={Edit} />
      <Drawer.Screen name="Add" component={Add} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}

export default DrawerRoutes
