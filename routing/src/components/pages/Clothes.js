import React, { Component } from 'react'

class Clothes extends Component {

    render() {

        console.log('Estas son las props de react-router-dom, pasadas desde el componente App:', this.props)

        const { season, type, element } = this.props.match.params

        return (
            <>
                <h1>Ropa</h1>
                <p>Estás visualizando {type} de tipo {element} y temporada {season}</p>
            </>
        )
    }
}

export default Clothes