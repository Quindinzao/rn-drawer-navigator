// External libraries
import React from 'react'

// Components
import RoundTouchable from '../../components/RoundTouchable'

// Styles
import { Container, TextContainer } from './styles'

const Add: React.FC = () => {
  return (
    <Container>
      <TextContainer>Add</TextContainer>
      <RoundTouchable
        activeOpacity={0.5}
        onPress={() => console.warn('Hello world')}
      />
    </Container>
  )
}

export default Add
