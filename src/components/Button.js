const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="w-60 px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-none shadow-sm"
    >
      {text}
    </button>
  );
};

export default Button;
