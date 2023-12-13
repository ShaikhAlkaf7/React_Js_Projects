import { useState } from "react";

function App() {
  let [color, setColor] = useState("Yellow");
  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 shadow-lg py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("Red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 shadow-lg py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 shadow-lg py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
