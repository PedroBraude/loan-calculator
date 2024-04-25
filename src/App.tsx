import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import { formatMoney } from './utils'

export default function App() {
  const [quantity, setQuantity] = useState(10000) // returns an array. This is why we use destructuring.

  const MIN = 0
  const MAX = 20000
  const STEP = 100

  function handleChangeRangeInput(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setQuantity(+e.target.value)
  }

  function handleClickDecrement() {
    const value = quantity - STEP
    if (quantity > MIN) setQuantity(value)
  }
  function handleClickIncrement() {
    const value = quantity + STEP
    if (quantity < MAX) setQuantity(value)
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button operator="-" fn={handleClickDecrement} />
        <Button operator="+" fn={handleClickIncrement} />
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
        {formatMoney(quantity, 'USD', 'en-US')}
      </p>
    </div>
  )
}
