import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Layout from './Components/Layout/layout';
import HeroSection from './Components/homePage/HeroSection/hero';
import Home from './Components/homePage/home';

// Define our theme
const theme = {
  primaryColor: '#4CAF50',
  secondaryColor: '#FFC107'
};

// Create a styled component
const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.secondaryColor};
  }
`;

function App() {
  return (
    
    <>
      {/* <ThemeProvider theme={theme}>
      <Button>Click Me</Button>
      
    </ThemeProvider> */}
       <Routes>
        <Route path="/" element={<Layout />} >
           <Route index element={<Home />} />
        </Route>
      </Routes>     
    </>
   
  );
}

export default App;