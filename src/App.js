import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header.js';
import ListTareas from './components/ListTareas/ListTareas.js';
import EnviarTarea from './components/EnviarTarea/EnviarTarea.js';



function App() {
  return (
    <Container>
      <Header/>
      <EnviarTarea/>
      <ListTareas/>
    </Container>
  );
}

export default App;