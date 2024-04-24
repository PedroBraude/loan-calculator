import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [quantity, setQuantity] = useState(10000); // returns an array. This is why we use destructuring.

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChangeRangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(+e.target.value);
  }

  function formatToARS(number: number) {
    return number.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
  }

  function handleClickDecrement() {
    const value = quantity - STEP;
    if (quantity > MIN) setQuantity(value);
  }
  function handleClickIncrement() {
    const value = quantity + STEP;
    if (quantity < MIN) setQuantity(value);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <button
          type="button"
          className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
          onClick={handleClickDecrement}
        >
          -
        </button>

        <button
          type="button"
          className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
          onClick={handleClickIncrement}
        >
          +
        </button>
      </div>

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accenter-lime-600"
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
        onChange={handleChangeRangeInput}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatToARS(quantity)}
      </p>
    </div>
  );
}

export default App;
