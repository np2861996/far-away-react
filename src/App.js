import "./App.css";
import { useState } from "react";

const messages = ["Learn React", "Apply for Jobs", "Invest Your New   Income"];

export default function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState({ name: "nik" });
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    setStep((s) => s + 1);
    setName({ name: "nikhil" });
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div>
      <button onClick={() => setIsOpen(false)}>X</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]} {name.name}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "purple", color: "white" }}
            >
              Privous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "purple", color: "white" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
