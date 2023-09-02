const OkijiteiItem = ({
  item,
  index,
  length,
  handleAdd,
  handleInputChange,
  handleRemove,
}) => {
  return (
    <div className="flex mb-2 text-center items-center">
      <input
        className="mr-3 border-solid border-gray-300 border px-2 py-1 w-40"
        type="text"
        value={item}
        onChange={(e) => handleInputChange(index, e.target.value)}
        placeholder="行く場所を入力..."
      />
      <div className="flex items-center">
        <button
          onClick={handleAdd}
          className="w-10 h-10 text-center px-0 py-2 border-solid border-gray-300 border font-semibold text-sm bg-blue-500 text-white rounded-none shadow-sm"
        >
          ＋
        </button>
        {length > 1 && (
          <button
            className="w-10 h-10 text-center mx-3 border-solid border-gray-300 border p-2"
            onClick={() => handleRemove(index)}
          >
            −
          </button>
        )}
      </div>
    </div>
  );
};

export default OkijiteiItem;
