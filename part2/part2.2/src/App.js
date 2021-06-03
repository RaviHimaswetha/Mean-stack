import React from 'react'

const Header = ({ web }) => {
  return (
      <h2>{web.name}</h2>
  )
}

const Part = (dev) => {
  return (
      <p>
          {dev.part.name} {dev.part.exercise}
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
const sum=web.parts[0].exercise + web.parts[1].exercise + web.parts[2].exercise
return (
   <strong>total of {sum} exercise</strong>
		
	);
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
  const tasks = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercise: 15,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercise: 10,
          id: 2
        },
        {
          name: 'State of a component',
          exercise: 25,
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
      
      {tasks.map(web => <Course web={web} />)}
    </>
  )
}

export default App