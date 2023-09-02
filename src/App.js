import { useState } from "react";

/** components */
import ToastMessage from "./components/ToastMessage";
import Output from "./components/Output";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Text from "./components/Text";

import OkijiteiItem from "./components/OkijiteiItem";

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
      <Heading text={"起ジ定ジェネレーター"} />
      <Text text={"キメるときの宣言に使おう！"} />
      <div className="p-6 border-solid border-gray-200 border">
        <div className="mb-2">起きたら...</div>

        {lists.map((item, index) => (
          <OkijiteiItem
            index={index}
            item={item}
            length={lists.length}
            handleAdd={handleAdd}
            handleInputChange={handleInputChange}
            handleRemove={handleRemove}
          />
        ))}

        <div className="mt-2">定期</div>
      </div>
      <div className="text-center mt-10">
        <Button text={"結果を出力"} handleClick={handleOutput} />
      </div>

      {/* output */}
      {output && (
        <div className="flex flex-col items-center gap-8">
          <Output output={output} />
          <Button text={"出力結果をコピーする"} handleClick={copyOutput} />
        </div>
      )}
      {/* output */}

      {toastMessage && <ToastMessage message={toastMessage} />}
    </div>
  );
}

export default App;
