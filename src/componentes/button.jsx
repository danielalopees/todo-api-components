// eslint-disable-next-line react/prop-types
export default function Button({ onClick, label }) {
  return (
    <div className="flex justify-center mt-4">
      <button
        type="button"
        onClick={onClick} // Ação ao clicar no botão
        className="py-2 px-3 sm:py-1 sm:px-5 inline-flex items-center text-xs sm:text-sm font-medium rounded-full border-transparent bg-[#6750A4] text-white focus:outline-none focus:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="mr-1 text-base sm:text-lg">+</span>
        {label}
      </button>
    </div>
  );
}
