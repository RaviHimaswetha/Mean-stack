import React from 'react'
const Header = ({ web }) => {
    return (
        <h2>{web.name}</h2>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ web }) => {
    return (
        <div>
            {web.parts.map((part) => <Part part={part} />)}
        </div>
    )
}

const Total = ({ web }) => {
    const sum = web.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <strong>Number of exercises {sum}</strong>
    )
}

const Course = ({ web }) => {
    return (
        <>
            <Header web={web} />
            <Content web={web} />
            <Total web={web} />
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
          exercises: 15,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 10,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 25,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 10,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(web => <Course web={web} />)}
    </>
  )
}

export default App