import React, { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import loanCalculatorService from "./services/LoanCalculator.service"

const initialUserInput = {
  price: 1000,
  firstPayment: 0,
  term: 2,
  rate: 0,
}

function App() {
  const [userInput, setUserInput] = useState(initialUserInput)
  const [creditType, setCreditType] = useState("classic")

  const schedualClassic = loanCalculatorService.paymentScheduleClassic({
    creditSum: userInput.price,
    interestRateMonth: userInput.rate / 100 / 12,
    creditPeriod: +userInput.term,
  })

  const schedualAnnuitet = loanCalculatorService.paymentScheduleAnnuitet({
    creditSum: userInput.price,
    interestRateYear: userInput.rate,
    interestRateMonth: userInput.rate / 100 / 12,
    creditPeriod: +userInput.term,
  })

  const schedual = creditType === "annuitet" ? schedualAnnuitet : schedualClassic

  function onChangeHandler(event) {
    const { name, value } = event.target
    setUserInput((prevUserInput) => ({ ...userInput, [name]: +value }))
  }

  function onChangeCreditType(event) {
    setCreditType(event.target.value);
  }

  return (
    <div className="app">

      <header className="header text-center">
        <img src={reactLogo} alt="logo react" />
        <h1 className="title">Calculator</h1>
      </header>

      <main id="main">
        <div className="card creadit-calculator text-center flex-column-center">
          <div className="w-35 input-group">
            <input
              className="form__field"
              type="number"
              name="price"
              placeholder="Ціна (грн)"
              onChange={onChangeHandler}
              value={userInput.price}
            />
            <label className="form__label">Ціна (грн)</label>
          </div>
          <div className="w-35 input-group">
            <input
              className="form__field"
              type="number"
              name="firstPayment"
              placeholder="Перший внесок"
              onChange={onChangeHandler}
              value={userInput.firstPayment}
            />
            <label className="form__label">Перший внесок</label>
          </div>
          <div className="w-35 input-group">
            <input
              className="form__field"
              type="number"
              name="term"
              placeholder="Строк кредитування"
              onChange={onChangeHandler}
              value={userInput.term}
            />
            <label className="form__label">Строк кредитування</label>
          </div>
          <div className="w-35 input-group">
            <input
              className="form__field"
              type="number"
              name="rate"
              placeholder="Відсоткова ставка за кредитом"
              onChange={onChangeHandler}
              value={userInput.rate}
            />
            <label className="form__label">Відсоткова ставка за кредитом</label>
          </div>

          <div className="w-35 input-group">
            <select className="form__field" onChange={onChangeCreditType} value={creditType}>
              <option value="classic">Класика</option>
              <option value="annuitet">Ануїтет</option>
            </select>
            <label className="form__label">Тип кредиту</label>
          </div>

        </div>

        <div className="result-container">
          <table id="result">
            <thead>
              <tr>
                <th>Місяць</th>
                <th>Заборгованність за кредитом, грн</th>
                <th>Погашення кредиту, грн</th>
                <th>Відсотки за кредитом</th>
                <th>Виплати в місяць, грн</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>

        {JSON.stringify(userInput)}
        {JSON.stringify(schedual)}
      </main>

    </div>
  )
}

export default App


