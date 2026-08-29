// *********************
// Role of the component: Quantity input for incrementing and decrementing product quantity on the single product page
// Name of the component: QuantityInput.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <QuantityInput quantityCount={quantityCount} setQuantityCount={setQuantityCount} />
// Input parameters: QuantityInputProps interface
// Output: one number input and two buttons
// *********************

"use client";

import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

interface QuantityInputProps {
  quantityCount: number;
  setQuantityCount: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityInput = ({quantityCount, setQuantityCount} : QuantityInputProps) => {


  const handleQuantityChange = (actionName: string): void => {
    if (actionName === "plus") {
      setQuantityCount(quantityCount + 1);
    } else if (actionName === "minus" && quantityCount !== 1) {
      setQuantityCount(quantityCount - 1);
    }
  };

  return (
    <div className="flex items-center gap-x-3">
      <p className="text-[13px] font-semibold">Qty</p>

      <div className="flex items-center gap-1">
        <button
          type="button"
          className="flex size-11 items-center justify-center border border-brand-ink text-black"
          onClick={() => handleQuantityChange("minus")}
        >
          <FaMinus />
        </button>

        <input
          type="number"
          id="Quantity"
          disabled={true}
          value={quantityCount}
          className="h-11 w-14 border-brand-ink bg-white text-center text-sm"
        />

        <button
          type="button"
          className="flex size-11 items-center justify-center border border-brand-ink text-black"
          onClick={() => handleQuantityChange("plus")}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
