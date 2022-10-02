import React from "react";
import { Grid } from '@mui/material';

import './ListTareas.scss';

export default function ListTareas(props) {
    const { allTareas } = props

    if(!allTareas || (allTareas.length === 0)) {
        return (
            <div className="list-vacio">
                <h2>No hay tareas...</h2>
            </div>
        );
    }

    return (
        <Grid container spacing={ 3 } className="list-tareas">

        </Grid>
    );
}