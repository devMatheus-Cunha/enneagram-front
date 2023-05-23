import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: (props: { colorMode: 'dark' | 'light' }) => ({
    'html, body': {
      fontSize: 'lg',
    },
  }),
}

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles,
})

export default theme
