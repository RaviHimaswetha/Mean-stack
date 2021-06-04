import React from 'react'

const Header = ({ Mearn }) => {
  return (
      <h2>{Mearn.name}</h2>
  )
}

const Part = (pro) => {
  return (
      <p>
          {pro.part.name} {pro.part.exercise}
      </p>
  )
}

const Content = ({ Mearn }) => {
  return (
      <div>
          {Mearn.parts.map((part) => <Part part={part} />)}
      </div>
  )
}

const Total = ({ Mearn }) => {
  const sum1 = Mearn.parts.reduce((total, part) => total + part.exercise, 0)
  return (
      <strong>Number of exercises {sum1}</strong>
  )
}

const Course = ({ Mearn }) => {
  return (
      <>
          <Header Mearn={Mearn} />
          <Content Mearn={Mearn} />
          <Total Mearn={Mearn} />
      </>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercise: 20,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercise: 25,
          id: 2
        },
        {
          name: 'State of a component',
          exercise: 10,
          id: 3
        },
        {
          name: 'Redux',
          exercise: 15,
          id: 4
        }
      ]
    },
    
  ]

  return (
    <>
      
      {courses.map(Mearn => <Course Mearn={Mearn} />)}
    </>
  )
}

export default App