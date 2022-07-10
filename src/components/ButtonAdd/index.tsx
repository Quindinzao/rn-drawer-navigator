// External libraries
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Styled
import styles from './styles'
import dark from '../../styles/themes/dark'
import { TouchableOpacity } from 'react-native'

interface ButtonAddProps {
  onPress: () => void
  activeOpacity: number
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ activeOpacity, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacity}
      onPress={onPress}>
      <LinearGradient
        style={styles.iconAdd}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={[dark.colors.primary, dark.colors.secondary]}>
        <Ionicons name="ios-add" size={26} color="#FFF" />
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default ButtonAdd
