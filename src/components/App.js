import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState(0);
  const [initialUnit, setInitialUnit] = useState(1);  // Meter
  const [targetUnit, setTargetUnit] = useState(1);    // Meter

  const handleAmountChanges = (event) => {
    const tempAmount = event.target.value
    tempAmount.length > 0 ? setAmount(tempAmount) : setAmount('0')
  };

  const handleInitialUnit = (event) => {
    setInitialUnit(event.target.value)
  };

  const handleTargetUnit = (event) => {
    setTargetUnit(event.target.value)
  };

  const handleConversionClick = () => {
    setResult(parseFloat(amount) * parseFloat(initialUnit) / parseFloat(targetUnit))
  };

  return (
    <>
      <div className="converter-form">
        <Input label="Amount" onChange={handleAmountChanges} />
        <div className="row">
          <Select label="From" items={units} onChange={handleInitialUnit} />
          <Select label="To" items={units} onChange={handleTargetUnit} />
          <button onClick={handleConversionClick}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
