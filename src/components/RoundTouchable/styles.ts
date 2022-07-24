// External libraries
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const RoundTouchableContainer = styled.TouchableOpacity`
  width: 55px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 20px;
  bottom: 0px;
`

const styles = StyleSheet.create({
  roundTouchableContainer: {
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 60, height: 60 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  roundTouchableIcon: {
    width: 55,
    height: 55,

    marginBottom: 25,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 27.5,
  },
})

export default styles
