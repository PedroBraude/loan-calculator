import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [quantity, setQuantity] = useState(0); // returns an array. This is why we use destructuring.

  function handleChangeRangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(+e.target.value);
  }

  function formatToARS(number: number){
    return number.toLocaleString('es-AR',{
      style: 'currency',
      currency: "ARS"
    })
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accenter-lime-600"
        max={1000000}
        onChange={handleChangeRangeInput}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{formatToARS(quantity)}</p>
    </div>
  );
}

export default App;
