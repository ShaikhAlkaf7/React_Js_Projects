import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");
  let passwordRef = useRef(null);
  let passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*+=<>/?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [charAllowed, numberAllowed, length, setPassword]);
  useEffect(() => {
    passwordGenrator();
  }, [charAllowed, numberAllowed, length, passwordGenrator]);
  // passwordGenrator();
  let passwordCopyClipbord = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center bg-gray-700 text-white">
          password Genrator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="bg-white outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={passwordCopyClipbord}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 bg-gray-700">
          <div className="flex item-center gap-x-1 bg-gray-700">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="bg-gray-700">Length{length}</label>
          </div>
          <div className="flex item-center gap-x-1 bg-gray-700">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="bg-gray-700">
              Number
            </label>
          </div>
          <div className="flex item-center gap-x-1 bg-gray-700">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput" className="bg-gray-700">
              Charecter
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
