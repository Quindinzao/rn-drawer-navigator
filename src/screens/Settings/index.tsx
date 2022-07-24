// External libraries
import React, { useContext } from 'react'
import { Switch } from 'react-native'

// Components
import PrimaryTouchable from '../../components/PrimaryTouchable'

// Contexts
import { useAuth } from '../../contexts/Auth'
import { ThemeContext, ThemeType } from '../../contexts/Theme'

// Styles
import { Container, TextContainer } from './styles'

const Settings: React.FC = () => {
  const { signOut } = useAuth()
  const { theme, toggleTheme } = useContext(ThemeContext)

  const isLightMode = theme === ThemeType.lightTheme

  return (
    <Container>
      <TextContainer>Settings</TextContainer>
      <Switch
        value={isLightMode}
        onValueChange={toggleTheme}
        trackColor={{ false: '#121214', true: '#FFFFFF' }}
        thumbColor={'#FFB300'}
      />
      <PrimaryTouchable
        title="Sign Out"
        optionType="default"
        onPress={signOut}
        opacity={0.7}
      />
    </Container>
  )
}

export default Settings
