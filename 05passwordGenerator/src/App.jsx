import { useState, useEffect, useCallback, useRef } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNum] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed])

  //use useRef hook

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-md rounded-lg mx-auto bg-slate-800 px-4 py-3 my-24">
        <h1 className="text-center my-3 text-2xl">Generate a Password</h1>
        <div className="flex shadow overflow-hidden mb-4 rounded-lg border-gray-300">
          <input
            type="text"
            className="rounded-l-lg outline-none w-full text-black py-2 px-4"
            placeholder="Password"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            type="button"
            onClick={copyPasswordToClipboard}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-0.5 rounded-r-lg outline-none shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={8}
              max={35}
              onChange={(e) => { setLength(e.target.value) }} /><label>Length: {length}</label>
          </div>  
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numAllowed}
              onChange={() => { setNum((prev) => !prev) }}
            /><label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            id="characterInput"
            defaultChecked={charAllowed}
            onChange={() => { setChar((prev) => !prev) }}
          /><label htmlFor="characterInput">Characters</label></div>
        </div>
      </div>
    </>
  )
}

export default App
