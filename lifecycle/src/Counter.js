import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = { count: 0 }
    }

    count = () => {

        this.setState((prevState) => {      // EL retorno del callback argumentado a .setState() será el nuevo estado
            return {
                count: prevState.count + 1
            }
        })

    }

    componentDidMount = () => this.interval = setInterval(this.count, 100)
    componentWillUnmount = () => clearInterval(this.interval)
    componentDidUpdate = (prevProps, prevState) => console.log('El contador ha pasado de ', prevState.count, 'a', this.state.count)

    render() {
        return (
            <h1> {this.state.count}</h1>
        )
    }
}

export default Counter