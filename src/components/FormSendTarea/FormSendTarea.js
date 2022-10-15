import React, { useState } from "react"
import { FormControl, FormGroup, TextField, Button } from "@mui/material"

import "./FormSendTarea.scss"

export default function FormSendTarea(props) {
    const { sendTarea } = props
    const [formValue, setFormValue] = useState({
        nombre: "",
        tarea: ""
    })

    const onFormChange = e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className = "enviar-tarea">
            <h2 
            className = "enviar-tarea_title" 
            style = {{ color: "#050452" }}
            >Enviar Tarea
            </h2>
            <form
                onSubmit = { event => sendTarea(event, formValue) }
                onChange = { onFormChange }
                className = "enviar-tarea_form">
                <FormControl>
                    <FormGroup>
                        <TextField
                            className = "enviar-tarea_form-name"
                            type = "text"
                            name = "name"
                            placeholder = "Nombre de usuario"
                            margin = "normal" />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            className = "enviar-tarea_form-textarea"
                            name = "tarea"
                            multiline
                            rows = "6"
                            placeholder = "Tarea..."
                            margin = "normal" />
                    </FormGroup>
                    <FormGroup>
                        <Button 
                        type = "submit"
                        style = {{ color: "#ab9413", background: "#050452" }}
                        >Enviar Tarea
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}