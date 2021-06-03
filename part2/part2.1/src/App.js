import React from 'react'

const Header = ({ web }) => {
  return (
      <h2>{web.name}</h2>
  )
}

const Part = (props) => {
  return (
      <p>
          {props.part.name} {props.part.exercise}
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


const Course = ({ web }) => {
  return (
      <>
          <Header web={web} />
          <Content web={web} />
         
      </>
  )
}
const App = () => {
  const task = [
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
          exercise: 15,
          id: 2
        },
        {
          name: 'State of a component',
          exercise: 25,
          id: 3
        },
        
      ]
    },
    
  ]

  return (
    <>
      
      {task.map(web => <Course web={web} />)}
    </>
  )
}

export default App
