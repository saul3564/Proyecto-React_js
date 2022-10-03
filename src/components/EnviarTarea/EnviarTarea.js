import React from "react";
import { Fab } from "@mui/material";
import Agregar from "../../assets/img/Simbolo_mas.jpeg";

import "./EnviarTarea.scss";

export default function EnviarTarea()
{
    return (
        <div className="enviar-tarea">
            <Fab className="enviar-tarea__abrir"
            aria-label="add"
            onClick={()=>{alert("Abrir Modal")}}
            >
                <img src={Agregar} alt="Icono_2"/>
            </Fab>
        </div>
    );
}