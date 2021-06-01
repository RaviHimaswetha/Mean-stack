import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, better, bad, }) => {
 
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="good" value={good} /></tr>
        <tr><Statistic feedback="better" value={better} /></tr>
        <tr><Statistic feedback="bad" value={bad} /></tr>
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

  const handleEasyClick = () =>
    setGood(good + 1)

  const handleModerateClick = () =>
    setBetter(better + 1)

  const handleDifficultClick = () =>
    setBad(bad + 1)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleEasyClick} text="good" />
      <Button handleClick={handleModerateClick} text="better" />
      <Button handleClick={handleDifficultClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} better={better} bad={bad} />
    </>
  )
}

export default App