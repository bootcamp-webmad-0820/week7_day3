import React from 'react'

const MovieCard = ({ director, title, removeMovie, hasOscar }) => {

    return (
        <article className="movie-card">
            <h3>{title}</h3>
            <p>{director} ({hasOscar ? 'Tuvo oscars' : 'No tuvo oscars'})</p>
            <button onClick={removeMovie}>Eliminar película</button>
        </article>
    )
}

export default MovieCard