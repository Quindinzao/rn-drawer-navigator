// External libraries
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Settings from '../../screens/Settings'

// Routes
import DrawerRoutes from '../custom/drawer.routes'
import { propsNavigationStack } from '../models'

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

const AppStack: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="DrawerRoutes" component={DrawerRoutes} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  )
}

export default AppStack
