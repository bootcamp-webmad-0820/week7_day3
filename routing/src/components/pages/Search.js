import React, { Component } from 'react'
import queryString from 'query-string'

class Search extends Component {

    render() {

        console.log('Estas son las props de react-router-dom, pasadas desde el componente App:', this.props)

        const initialQS = this.props.location.search

        // Con la dependnecia query-string:
        const values = queryString.parse(this.props.location.search)
        const { name, age } = values

        return (
            <>
                <h1>Busqueda</h1>
                <p>Los query strings se muestran como un string: {initialQS}</p>
                <hr />
                <p>Pero la dependencia query-string facilita la tarea: {name}, {age}</p>
            </>
        )
    }
}

export default Search