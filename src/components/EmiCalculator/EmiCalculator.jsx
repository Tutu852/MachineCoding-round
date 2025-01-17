import { useState } from "react";

const EmiCalculator = () => {
  const [cost,setCost] = useState(0);
  const [interest,setInterest] = useState(0);
  const [fee,setFee] = useState(0);
  const [downPayment,setDownPayment] = useState(0);
  const [tenure,setTenuze] = useState(0);
  const [emi,setEmi] = useState(0);
  return (
    <div className="EmiCalculator">
        <span className="title">EmiCalculator</span>
    </div>
   
  )
}

export default EmiCalculator
