// External libraries
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from 'styled-components/native'

// Styled
import styles, { RoundTouchableContainer } from './styles'

interface RoundTouchableProps {
  onPress: () => void
  activeOpacity: number
}

const RoundTouchable: React.FC<RoundTouchableProps> = ({
  activeOpacity,
  onPress,
}) => {
  const { colors } = useTheme()
  return (
    <RoundTouchableContainer
      style={styles.roundTouchableContainer}
      activeOpacity={activeOpacity}
      onPress={onPress}>
      <LinearGradient
        style={styles.roundTouchableIcon}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={[colors.primary, colors.secondary]}>
        <Ionicons name="ios-add" size={26} color="#FFF" />
      </LinearGradient>
    </RoundTouchableContainer>
  )
}

export default RoundTouchable
