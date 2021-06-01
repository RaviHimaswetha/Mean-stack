import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, better, bad, all, average, positive }) => {
 
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="good" value={good} /></tr>
        <tr><Statistic feedback="better" value={better} /></tr>
        <tr><Statistic feedback="bad" value={bad} /></tr>
        <tr><Statistic feedback="all" value={all} /></tr>
        <tr><Statistic feedback="average" value= {average} /></tr>
        <tr><Statistic feedback="positive" value={positive + '%'} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ feedback, value }) => {
  return (
    <td>{feedback} {value}</td>
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
    
    const average = ((good - bad) / all)

    const positive = (good / all) * 100


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleBetterClick} text="better" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} better={better} bad={bad} all={all} average={average} positive={positive} />
    </>
  )
}

export default App