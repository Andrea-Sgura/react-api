import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    // Definisco la variabile di stato degli attori
    const [actors, setActors] = useState([]);

    // Definisco la funzione che effettua la chiamata ajax
    const getActors = () => {
        axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
            console.log(resp.data);
        })
    }

    useEffect(() => getActors(), []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">Hello World</div>
            </div>
        </div>
    )
}

export default Main