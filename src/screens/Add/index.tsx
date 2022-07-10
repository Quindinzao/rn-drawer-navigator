// External libraries
import React from 'react'
import { Text, View } from 'react-native'

// Components
import ButtonAdd from '../../components/ButtonAdd'

// Styles
import styles from './styles'

const Add: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Add</Text>
      <ButtonAdd
        activeOpacity={0.5}
        onPress={() => console.warn('Hello world')}
      />
    </View>
  )
}

export default Add
