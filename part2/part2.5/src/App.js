import React from 'react'
import Mearn from './components/Mearn.js'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercise: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercise: 15,
          id: 2
        },
        {
          name: 'State of a component',
          exercise: 20,
          id: 3
        },
        {
          name: 'Redux',
          exercise: 10,
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
          exercise: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercise: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(web => <Mearn web={web} />)}
    </>
  )
}

export default App