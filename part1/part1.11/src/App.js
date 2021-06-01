import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, better, bad, all, average, positive }) => {
  if (good === 0 & better === 0 & bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="better" value={better} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value= {average} />
        <Statistic text="positive" value={positive + '%'} />
      </tbody>
    </table>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
    <td>{text}</td> 
    <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [better, setBetter] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>
    setGood(good + 1)

  const handleBetterClick = () =>
    setBetter(better + 1)

  const handleBadClick = () =>
    setBad(bad + 1)

    const all = good + better + bad
    
    const average = ((good - better) / all)

    const positive = (good / all) * 100


  return (
    <>
      <h1>give text</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleBetterClick} text="better" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} better={better} bad={bad} all={all} average={average} positive={positive} />
    </>
  )
}

export default App