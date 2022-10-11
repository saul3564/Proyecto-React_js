import React from "react";
import { Card, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment/moment";

import "./Tarea.scss";

export default function Tarea(props) {
    
    const {
        tarea: { name, tarea, fecha },
        index,
        hacerTarea
    } = props

    return (
        <Card className="tarea">
            <CardContent>
                <div className="tarea_header">
                    <h5>{ name }</h5>
                    <DeleteIcon onClick={ () => hacerTarea(index)} />
                </div>
                <p>{ tarea }</p>
                <div className="tarea_date-add-tarea">
                    { moment(fecha).format("DD/MM/YYYY HH:mm") }
                </div>
            </CardContent>
        </Card>
    )
}