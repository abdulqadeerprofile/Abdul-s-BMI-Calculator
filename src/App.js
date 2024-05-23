import "./App.css";
import React, { useState } from "react";

function App() {
  // Making state for our application
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Logic
  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      let bmiValue = (weight / (height * height)) * 703;
      bmiValue = bmiValue.toFixed(1);
      setBmi(bmiValue);  

      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMessage('You have a normal weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setMessage('You are overweight');
      } else if (bmiValue >= 30) {
        setMessage('You are obese');
      } else {
        setMessage('You are overweight');
      }
    }
  }

  // Reload
  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <h2>Abdul's BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (inches)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;