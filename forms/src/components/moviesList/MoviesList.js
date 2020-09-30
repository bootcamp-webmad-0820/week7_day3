import React, { Component } from 'react'

import { movies as moviesFromFakeApi } from '../data-simulation'

import MovieCard from './MovieCard'
import NewMovieForm from './NewMovieForm'
import './MoviesList.css'

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: moviesFromFakeApi
        }
    }

    removeMovieFromState = movieID => {
        this.setState({
            movies: this.state.movies.filter(elm => elm.id != movieID)
        })
    }

    addMovie = newMovie => {

        const moviesCopy = [...this.state.movies]       // <= OJO! Copia
        moviesCopy.push(newMovie)

        this.setState({ movies: moviesCopy })
    }

    render() {
        return (
            <>
                <button onClick={this.addMovie}>Añadir peli</button>

                <ul>
                    {this.state.movies.map(elm => <MovieCard key={elm.id} {...elm} removeMovie={() => this.removeMovieFromState(elm.id)} />)}
                </ul>

                <h2>Añadir nueva película</h2>
                <NewMovieForm addMovie={this.addMovie} />

            </>
        )
    }
}

export default MoviesList