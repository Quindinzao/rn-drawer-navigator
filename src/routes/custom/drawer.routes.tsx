// External libraries
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

// Screens
import List from '../../screens/List'
import Edit from '../../screens/Edit'
import Add from '../../screens/Add'
import Search from '../../screens/Search'
import Settings from '../../screens/Settings'

// Styles
import dark from '../../styles/themes/dark'

const Drawer = createDrawerNavigator()

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: dark.colors.primary,
        drawerActiveTintColor: dark.colors.primary,
        headerStyle: {
          backgroundColor: dark.colors.backgroundColorItem,
        },
        drawerStyle: {
          backgroundColor: dark.colors.backgroundColorItem,
        },
        drawerInactiveTintColor: dark.colors.default,
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
