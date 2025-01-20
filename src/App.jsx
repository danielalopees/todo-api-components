import "./App.css";
import Input from "./componentes/input";
import Ul from "./componentes/ul";
import Button from "./componentes/button";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tarefa, setTarefa] = useState(""); // Estado para o nome da tarefa
  const [detalhes, setDetalhes] = useState(""); // Estado para os detalhes
  const [usuarios, setUsuarios] = useState([]); // Lista de tarefas
  const [editIndex, setEditIndex] = useState(null); // Índice da tarefa em edição

  useEffect(() => {
    listarTarefas(); // Essa função deve ser chamada uma vez, ao montar o componente
  }, []);

  // Função para listar tarefas
  const listarTarefas = async () => {
    try {
      const response = await axios.get(
        "https://to-do-api-gateway.vercel.app/api/tasks"
      );
      setUsuarios(response.data);
    } catch (error) {
      console.error("Erro ao listar tarefas:", error);
    }
  };

  // Função para adicionar ou editar tarefa
  const adicionarTarefa = async () => {
    if (tarefa.trim() && detalhes.trim()) {
      if (editIndex !== null) {
        // Atualizar tarefa existente
        try {
          const response = await axios.put(
            "https://to-do-api-gateway.vercel.app/api/tasks",
            {
              id: usuarios[editIndex].id,
              is_completed: false,
              title: tarefa,
              body: detalhes,
            }
          );
          const updatedUsuarios = usuarios.map((usuario, index) =>
            index === editIndex ? response.data : usuario
          );
          setUsuarios(updatedUsuarios);
          setEditIndex(null);
        } catch (error) {
          console.error("Erro ao atualizar tarefa:", error);
        }
      } else {
        // Adicionar nova tarefa
        try {
          await axios.post("https://to-do-api-gateway.vercel.app/api/tasks", {
            title: tarefa,
            body: detalhes,
          });

          listarTarefas();
          // Atualizando o estado para adicionar a nova tarefa
          // setUsuarios((prevUsuarios) => [...prevUsuarios, response.data]); // Aqui você garante que o estado de 'usuarios' seja atualizado corretamente
        } catch (error) {
          console.error("Erro ao criar tarefa:", error);
        }
      }
      setTarefa(""); // Reseta o input de tarefa
      setDetalhes(""); // Reseta o input de detalhes
    }
  };

  // Função para excluir tarefa
  const excluirTarefa = async (index) => {
    try {
      await axios.delete("https://to-do-api-gateway.vercel.app/api/tasks", {
        data: { id: usuarios[index].id },
      });
      setUsuarios((prevUsuarios) => prevUsuarios.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  // Carregar tarefas ao montar o componente
  useEffect(() => {
    listarTarefas();
  }, []);

  return (
    <div>
      {/* Título Responsivo */}
      <h1 className="mb-8 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Lista de Tarefas
      </h1>

      {/* Input de Tarefa */}
      <Input
        tarefa={tarefa}
        detalhes={detalhes}
        setTarefa={setTarefa}
        setDetalhes={setDetalhes}
      />

      {/* Botão para Adicionar Tarefa */}
      <Button
        onClick={adicionarTarefa}
        label={editIndex !== null ? "Salvar Tarefa" : "Adicionar Tarefa"}
      />

      {/* Lista de Tarefas */}
      <Ul usuarios={usuarios} onDelete={excluirTarefa} />
    </div>
  );
}

export default App;
