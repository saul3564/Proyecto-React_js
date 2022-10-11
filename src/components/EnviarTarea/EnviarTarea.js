import React, { useState } from "react";
import { Fab } from "@mui/material";
import Agregar from "../../assets/img/Simbolo_mas.jpeg";
import moment from "moment/moment";
import ModalContainer from "../ModalContainer";
import FormsendTarea from "../FormSendTarea";
import { TASKS_STORAGE } from "../../utils/constants";

import "./EnviarTarea.scss";

export default function EnviarTarea(props)
{
    const { setToastProps, allTareas } = props
    const [ isOpenModal, setIsOpenModal ] = useState(false)

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const sendTarea = (event, formValue) => {
        event.preventDefault()

        const { name, tarea } = formValue
        let allTareasArray = []

        if(allTareas) {
            allTareasArray = allTareas
        }

        if(!name || !tarea) {
            setToastProps({
                open: true,
                text: "WARNING: Todos los campos son obligatorios."
            })
        } else {
            formValue.fecha = moment()
            allTareasArray.push(formValue)
            localStorage.setItem(TASKS_STORAGE, JSON.stringify(allTareasArray))
            setToastProps({
                open: true,
                text: "Tarea enviada correctamente."
            })
            setIsOpenModal(false)
        }
        allTareasArray = []
    }

    return (
        <div className="enviar-tarea">
            <Fab className="enviar-tarea__abrir"
            aria-label="add"
            onClick={ openModal }
            >
                <img src={Agregar} alt="Icono_2"/>
            </Fab>

            <ModalContainer isOpenModal={ isOpenModal } closeModal={ closeModal}>
                <FormsendTarea sendTarea={ sendTarea }/>
            </ModalContainer>
        </div>
    );
}