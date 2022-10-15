import React from "react";
import { Grid } from '@mui/material';
import Tarea from "../Tarea/Tarea";

import './ListTareas.scss';

export default function ListTareas(props) {
    const { allTareas, hacerTarea } = props

    if(!allTareas || (allTareas.length === 0)) {
        return (
            <div className="list-vacio">
                <h2>No hay tareas...</h2>
            </div>
        );
    }

    return (
        <Grid container spacing={ 3 } className="list-tareas">
            {
            allTareas.map((tarea, index) => {
                return (<Grid key={index} item xs={4}>
                    <Tarea tarea={tarea} index={index} hacerTarea={hacerTarea}/>
                </Grid>)
            })}
        </Grid>
    );
}