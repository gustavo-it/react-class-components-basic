import React, { Component } from 'react';
import './Main.css';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';


export default class Main extends Component {
  state = {
    tarefas: [
    ],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim(); // elimina espaços do inicio e fim

    if(tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    })
  }

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
        <form onSubmit={this.handleSubmit} action="#" className='form'>
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
              <span>
              <FaEdit className='edit' />
              <FaWindowClose className='delete' />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
