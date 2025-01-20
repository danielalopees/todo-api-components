// eslint-disable-next-line react/prop-types
const Ul = ({ usuarios = [], onDelete }) => {
  return (
    <ul className="space-y-4 mt-8">
      {usuarios.length > 0 ? (
        usuarios.map(
          (usuario, index) =>
            usuario && (
              <li
                key={index}
                className="px-4 py-2 w-full sm:w-80 md:w-[460px]  rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 mx-1 accent-[#6750A4]"
                    />
                    <div>
                      <span className="font-medium text-sm sm:text-base block">
                        {usuario.title}
                      </span>
                      <span className="text-xs text-gray-600 mt-0 block">
                        {usuario.body}
                      </span>
                    </div>
                  </div>
                  <button
                    className="text-[#49454F] text-xs underline px-2 py-1 rounded hover:text-red-600"
                    onClick={() => onDelete(index)}
                  >
                    Remover
                  </button>
                </div>
                <hr className="border-t-2 border-gray-300 w-full mt-2" />
              </li>
            )
        )
      ) : (
        <li className="text-gray-700 text-center">
          Nenhuma tarefa adicionada.
        </li>
      )}
    </ul>
  );
};

export default Ul;
