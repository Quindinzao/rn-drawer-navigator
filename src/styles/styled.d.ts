import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      text: string
      backgroundColor: string
      backgroundColorItem: string

      primary: string
      secondary: string
      terciary: string

      default: string
    }
  }
}
