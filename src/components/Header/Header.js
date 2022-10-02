import React from "react";
import NoteLogo from "../../assets/img/note.png";

import "./Header.scss"

export default function header() {
    return (
        <div className="header">
            <img src= {NoteLogo} alt="Logo nota"/>
            <h1>Lista de tareas</h1>
        </div>
    );
}