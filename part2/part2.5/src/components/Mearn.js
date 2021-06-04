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

export default Course