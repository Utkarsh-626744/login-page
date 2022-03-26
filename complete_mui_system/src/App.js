import { createTheme } from '@mui/system';
import { render } from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import AfterLogin from './components/AfterLogin';
import Illustration from './components/Illustration';
import Login from './components/Login';
const theme = createTheme({
  palette: {
    primary:{
      main:'#1F64CC'
    } 
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
          <Illustration/>
          <Login/>
          </>
        } />
         <Route path="/loged-in" element={<AfterLogin/>} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
