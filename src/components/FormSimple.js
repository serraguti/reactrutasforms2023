import React, { Component } from 'react'

export default class FormSimple extends Component {
    //NECESITAMOS CREAR VARIABLES DE REFERENCIA 
    //PARA PODER CAPTURAR LA INFORMACION DE LOS FORMULARIOS
    cajaNombre = React.createRef();
    cajaEdad = React.createRef();
    state = {
        user: null
    }

    //NECESITAMOS UN METODO PARA RECIBIR LOS DATOS DEL FORMULARIO
    //AL REALIZAR SUBMIT.  DICHO METODO TENDRA QUE RECIBIR event (e)
    peticionForm = (e) => {
        //LA PRIMERA INSTRUCCION SIEMPRE SERA DETENER LA PROPAGACION
        //DEL EVENTO
        e.preventDefault();
        console.log("Datos recibidos");
        //EN LAS REFERENCIAS DE OBJETO (React.createRef) PARA CAPTURAR 
        //EL VALOR SE UTILIZA objeto.current.value
        this.setState({
            user: {
                nombre: this.cajaNombre.current.value,
                edad: this.cajaEdad.current.value
            }
        })
    }
    
    render() {
        return (
        <div>
            <h1>Ejemplo Form Simple</h1>
            {
                this.state.user && 
                (<div>
                    <h2 style={{color:"blue"}}>
                        Usuario: {this.state.user.nombre}, 
                        Edad: {this.state.user.edad}
                    </h2>
                </div>)
            }
            <form onSubmit={this.peticionForm}>
                <label>Nombre: </label>
                <input type="text" ref={this.cajaNombre}
                onChange={this.peticionForm}/><br/>
                <label>Edad: </label>
                <input type="text" ref={this.cajaEdad}/><br/>
                <button>
                    Enviar datos
                </button>
            </form>
        </div>
        )
    }
}
