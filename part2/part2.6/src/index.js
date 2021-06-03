import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'

const persons = [
  {
    id: 11,
    content: 'swetha'

  }
  ,
  {
    id: 13,
    content: 'dev' 
  }
]
ReactDOM.render(<App persons={persons}/>,
  document.getElementById('root'))