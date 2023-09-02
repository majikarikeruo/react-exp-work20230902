import { useState } from "react";

function App() {
  const [lists, setLists] = useState(["ジ"]);
  const [output, setOutput] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAdd = () => {
    setLists((prevLists) => [...prevLists, ""]);
  };

  const handleRemove = (index) => {
    setLists((prevLists) => prevLists.filter((_, idx) => idx !== index));
  };

  const handleInputChange = (index, value) => {
    const updatedLists = [...lists];
    updatedLists[index] = value;
    setLists(updatedLists);
  };

  const handleOutput = () => {
    const firstChars = lists.map((item) => (item[0] ? item[0] : ""));
    const concatenatedInputs = firstChars.join("");
    const result = `起${concatenatedInputs}定`;
    setOutput(result);
  };

  const copyOutput = () => {
    navigator.clipboard
      .writeText(output)
      .then(() => {
        showToast("テキストをコピーしました！");
      })
      .catch((err) => {
        showToast("コピーに失敗しました");
      });
  };

  return (
    <div className="mx-auto w-80 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        起ジ定ジェネレーター
      </h1>
      <p className="mb-10 text-center">キメるときの宣言に使おう！</p>
      <div className="p-6 border-solid border-gray-200 border">
        <div className="mb-2">起きたら...</div>

        {lists.map((item, index) => (
          <div key={index} className="flex mb-2 text-center items-center">
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
              {lists.length > 1 && (
                <button
                  className="w-10 h-10 text-center mx-3 border-solid border-gray-300 border p-2"
                  onClick={() => handleRemove(index)}
                >
                  −
                </button>
              )}
            </div>
          </div>
        ))}
        <div className="mt-2">定期</div>
      </div>
      <div className="text-center mt-10">
        <button
          onClick={handleOutput}
          className="w-60 px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-none shadow-sm"
        >
          結果を出力
        </button>
      </div>
      {output && (
        <>
          <div className="mt-10 text-center text-4xl parent">{output}</div>

          <div className="mt-4 text-center">
            <button
              onClick={copyOutput}
              className="w-60 px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-none shadow-sm"
            >
              出力結果をコピーする
            </button>
          </div>
        </>
      )}

      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;
