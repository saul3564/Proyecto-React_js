import React, { useState, useEffect } from 'react';
import { Container, Snackbar} from '@mui/material';
import Header from './components/Header/Header.js';
import ListTareas from './components/ListTareas/ListTareas.js';
import EnviarTarea from './components/EnviarTarea/EnviarTarea.js';
import { TASKS_STORAGE } from "./utils/constants";


function App() {

  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  })
  const [allTareas, setAllTareas] = useState([])
  const [reloadTareas, setReloadTareas] = useState(false)

  useEffect(() => {
    const allTareasStorage = localStorage.getItem(TASKS_STORAGE)
    const allTareasArray = JSON.parse(allTareasStorage)

    setAllTareas(allTareasArray)
    setReloadTareas(false)
  }, [reloadTareas])

  const hacerTarea = index => {
    allTareas.splice(index, 1)
    setAllTareas(allTareas)
    localStorage.setItem(TASKS_STORAGE, JSON.stringify(allTareas))
    setReloadTareas(true)
  }

  return (
    <Container className='lista-tareas' maxWidth={false}>
      <Header/>
      <EnviarTarea setToastProps={setToastProps} allTareas={allTareas}/>
      <ListTareas allTareas={allTareas} hacerTarea={hacerTarea}/>
      <Snackbar 
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={toastProps.open}
      autoHideDuration={1000}
      message={<span id='messege-id'>{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;