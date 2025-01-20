// eslint-disable-next-line react/prop-types
export default function Input({ tarefa, setTarefa, detalhes, setDetalhes }) {
  return (
    <div className="space-y-6">
      {/* Campo Nome da Tarefa */}
      <div className="relative">
        <input
          type="text"
          id="nome"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)} // Atualiza o estado do nome da tarefa
          className="w-full sm:w-80 md:w-[460px] bg-[#E6E0E9] rounded border px-4 pt-5 pb-2 text-sm text-[#49454F] placeholder-transparent"
          placeholder="Nome da Tarefa"
        />
        <label
          htmlFor="nome"
          className="absolute top-2 left-2 text-xs text-[#49454F]"
        >
          Nome da Tarefa
        </label>
      </div>

      {/* Campo Detalhes da Tarefa */}
      <div className="relative">
        <input
          type="text"
          id="detalhes"
          value={detalhes}
          onChange={(e) => setDetalhes(e.target.value)} // Atualiza o estado dos detalhes
          className="w-full sm:w-80 md:w-[460px] rounded border px-4 pt-5 pb-7 text-sm bg-[#E6E0E9] border-b-slate-950 placeholder-transparent"
          placeholder="Detalhes da Tarefa"
        />
        <label
          htmlFor="detalhes"
          className="absolute top-2 left-2 text-xs text-[#49454F]"
        >
          Detalhes da Tarefa
        </label>
      </div>
    </div>
  );
}
