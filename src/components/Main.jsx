import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    // Definisco la variabile di stato degli attori
    const [actors, setActors] = useState([]);

    // Definisco la funzione che effettua la chiamata ajax
    const getActors = () => {
        axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
            setActors(resp.data)
        })
    }

    useEffect(() => getActors(), []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Attori</h2>
                </div>
            </div>
            <div className="row">
                {actors.map((actor) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-3">
                            <div>
                                <div className="card-image">
                                    <img src={actor.image} className="img-fluid" />
                                </div>
                                <div className="card-info">
                                    <h4>
                                        {actor.name}
                                    </h4>
                                    <p>
                                        <em>{actor.birth_year}</em>
                                        {actor.nationality}
                                    </p>
                                    <p>
                                        {actor.biography}
                                    </p>
                                    <p>
                                        {actor.awards}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main