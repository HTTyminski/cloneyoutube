import React ,{ useState } from 'react';
// import logo from './logo.svg';
import { ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core';
import './App.css';
import Home from './home'
import { red } from '@material-ui/core/colors';
import { dark } from '@material-ui/core/styles/createPalette';

const useStyles= makeStyles((theme) => {
  {
  
  }
})


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
   palette:{
     type: darkMode ? 'dark': 'light',
     primary:{
       main:'#f44336'
     },
     secondary:{
       main: '#3EA6FF'
     },
     background:{
      defaulf:darkMode ? '#232323' : '#fff',
      dark:darkMode ? '#181818': '#f4f6f8',
      paper:darkMode ? '#232323' : '#fff',
     },
   }
  });

  const classes = useStyles();


  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
