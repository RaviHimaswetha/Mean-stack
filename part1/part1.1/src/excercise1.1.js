const Header = (props) => {
  return (
    <div>
      <p> {props.courses}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p> {props.part},{props.exercises}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}
const App = () => {
  const courses = ' Full Stack application development'
  const part1 = 'component'
  const exercise1 = 15
  const part2 = 'multiple components'
  const exercise2 = 12
  const part3 = 'jsx'
  const exercise3 = 24
  return (
    <div>
      <Header courses={courses} />
      <Content part={part1} exercises={exercise1} />
      <Content part={part2} exercises={exercise2} /> 
      <Content part={part3} exercises={exercise3} /> 
      <Total total= {exercise1 + exercise2 + exercise3} />
    </div>
  )
}
export default App