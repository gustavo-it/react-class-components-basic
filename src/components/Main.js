import React, { Component } from 'react';
import './Main.css';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';


export default class Main extends Component {
  state = {
    tarefas: [
      'Fazer café',
      'Ir ao supermercado',
    ],
  };

  handleChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className='main'>
        <h1>Lista de tarefas</h1>
        <form action="#" className='form'>
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className='tarefas'>
          {tarefas.map(tarefa => (
            // Cada elemento dentro de um laço, precisa ter uma propriedade key
            // com um valor único em cada iteração.
            <li key={tarefa}>
              {tarefa}
              <div>
              <FaEdit className='edit' />
              <FaWindowClose className='delete' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
