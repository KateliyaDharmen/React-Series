import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-slate-50 rounded-3xl gap-4 shadow-lg px-3 py-2">
            <button onClick={() => setColor('red')} className="outline-none rounded-full w-16 px-4 py-1 font-semibold text-white shadow-lg bg-red-500 hover:bg-red-900">Red</button>

            <button onClick={() => setColor('green')} className="outline-none rounded-full w-16 px-2 py-1 font-semibold text-cyan-50 shadow-lg bg-green-500 hover:bg-green-800">Green</button>

            <button onClick={() => setColor('Blue')} className="outline-none rounded-full w-16 px-2 py-1 font-semibold text-cyan-50 shadow-lg bg-blue-500 hover:bg-blue-800" >Blue</button>

            <button onClick={() => setColor('Yellow')} className="outline-none rounded-full w-16 px-2 py-1 font-semibold text-cyan-50 shadow-lg bg-yellow-500 hover:bg-yellow-800">Yellow</button>

            <button onClick={() => setColor('Purple')} className="outline-none rounded-full w-16 px-2 py-1 font-semibold text-cyan-50 shadow-lg bg-purple-500 hover:bg-purple-800">Purple</button>

            <button onClick={() => setColor('Pink')} className="outline-none rounded-full w-16 px-2 py-1 font-semibold text-cyan-50 shadow-lg bg-pink-500 hover:bg-pink-800">Pink</button>

            <button onClick={() => setColor('Violet')} className="outline-none rounded-full w-16 px-2 py-1 font-semibold text-cyan-50 shadow-lg bg-violet-500 hover:bg-violet-800">Violet</button>

            <button onClick={() => setColor('orange')} className="outline-none rounded-full w-16 px-2 py-1 font-semibold text-cyan-50 shadow-lg bg-orange-500 hover:bg-orange-800">Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
