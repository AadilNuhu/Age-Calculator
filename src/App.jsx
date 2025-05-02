import './App.css'
import { useState } from 'react';

function App() {
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()

  const [newDay, setNewDay] = useState()
  const [newMonth, setNewMonth] = useState()
  const [newYear, setNewYear] = useState()

  function handleClick() {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();


    if (ageDays < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += prevMonth.getDate();
      ageMonths -= 1;
    }


    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears -= 1;
    }

    setNewYear(ageYears);
    setNewMonth(ageMonths);
    setNewDay(ageDays);
  }




  return (
    <>
      <div className="container">
        <h1>Age Calculator</h1>
        <input type="number" placeholder='Day' onChange={(e) => setDay(e.target.value)} />
        <input type="number" placeholder='Month' onChange={(e) => setMonth(e.target.value)} />
        <input type="number" placeholder='Year' onChange={(e) => setYear(e.target.value)} />
        <button onClick={handleClick}>Generate</button>
        <hr />
        <div className="age-output">
          <h2><span>{newYear}</span> Years</h2>
          <h2><span>{newMonth}</span> Months</h2>
          <h2><span>{newDay}</span> Days</h2>
        </div>

      </div>
    </>
  )
}

export default App
