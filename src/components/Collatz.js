import React, { Component } from 'react'

export default class Collatz extends Component {
    //NECESITAMOS UNA CAJA PARA EL NUMERO
    cajaNumero = React.createRef();
    //TENDREMOS UN STATE CON UNA COLECCION DE NUMEROS
    //QUE RECORREREMOS PARA EL DIBUJO DE LA LISTA
    state = {
        numeros: []
    }

    //NECESITAMOS UN METODO PARA MOSTRAR LA CONJETURA DE COLLATZ
    mostrarCollatz = (e) => {
        e.preventDefault();
        //CAPTURAMOS EL NUMERO DE LA CAJA
        var numero = parseInt(this.cajaNumero.current.value);
        //VOY A CREAR UN ARRAY AUXILIAR PARA IR RELLENANDO CADA NUMERO
        var aux = [];
        while (numero != 1){
            if (numero % 2 == 0){
                //NUMERO PAR
                numero = numero / 2;
            }else{
                //NUMERO IMPAR
                numero = numero * 3 + 1;
            }
            //ALMACENAMOS CADA NUMERO
            aux.push(numero);
        }
        //ASIGNAMOS EL ARRAY AL ESTADO DE LA PAGINA
        this.setState({
            numeros: aux
        })
    }
  render() {
    return (
        <div>
            <h1>Collatz</h1>
            <form onSubmit={this.mostrarCollatz}>
                <label>Introduzca un número</label>
                <input type="number" ref={this.cajaNumero}/>
                <button>Ejecutar</button>
            </form>
            <ul>
                {
                    this.state.numeros.map((numero, index) => {
                        return (<li key={index}>{numero}</li>)
                    })
                }
            </ul>
        </div>
    )
  }
}
