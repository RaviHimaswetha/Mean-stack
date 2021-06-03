import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'

const persons = [
  {
    id: 11,
    content: 'swetha',
    number: '9848274015'

  }
 
]
ReactDOM.render(<App persons={persons}/>,
  document.getElementById('root'))