import React, { Component } from 'react'

class NewMovieForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            director: '',
            hasOscar: '',
            id: '94498',
            genre: ''
        }
    }

    // handleTitleInput = e => this.setState({ title: e.target.value })
    // handleDirectorInput = e => this.setState({ director: e.target.value })
    // handleOscarsInput = e => this.setState({ hasOscar: e.target.checked })

    handleInputChange = e => {

        let { name } = e.target
        let value = name === 'hasOscar' ? e.target.checked : e.target.value

        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        // VALIDACIÓN

        console.log('La película está en el estado:', this.state)

        this.props.addMovie(this.state) // Envío la info

        this.setState({                 // Vacío el form
            title: '',
            director: '',
            hasOscar: '',
            id: '94498'
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                <br /><br />

                <label>Director:</label>
                <input type="text" name="director" value={this.state.director} onChange={this.handleInputChange} />
                <br /><br />

                <label>Oscar Awarded:</label>
                <input type="checkbox" name="hasOscar" value={this.state.hasOscar} onChange={this.handleInputChange} />
                <br /><br />

                <label>Género</label>
                <select name='genre' onChange={this.handleInputChange}>
                    <option value="Drama">Drama</option>
                    <option value="Fantasía">Fantasía</option>
                    <option value="Terror">Terror</option>
                </select>
                <br /><br />

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NewMovieForm