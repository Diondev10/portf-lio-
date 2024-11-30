import React from "react";

function projects() {
  return (
    <div>
      <h1>Meus Projetos</h1>
      <ul>
        <li>
          <h2>Pokedex</h2>
          <p>Um projeto de Pokédex simples desenvolvido com React.</p>
          <a
            href="https://github.com/Diondev10/pokedex"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub - Pokedex
          </a>
        </li>
        <li>
          <h2>Lista de Tarefas</h2>
          <p>Aplicativo para gerenciar tarefas diárias.</p>
          <a
            href="https://github.com/Diondev10/lista-tarefa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub - Lista de Tarefas
          </a>
        </li>
      </ul>
    </div>
  );
}

export default projects;

