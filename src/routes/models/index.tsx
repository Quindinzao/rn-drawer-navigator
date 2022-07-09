import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type propsNavigationStack = {
  SignIn: undefined
  SignUp: undefined
  Settings: undefined
  DrawerRoutes: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends propsNavigationStack {}
//   }
// }
