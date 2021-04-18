import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    allVariants: {
      color: '#707070'
    }
  },

  palette: {
    primary: {
      main: '#1E4151'
    },
    secondary: {
      main: '#000000'
    }
  }
})

export default theme;
