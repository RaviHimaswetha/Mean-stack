import React, {useState} from 'react'

const Person = ({ Mearn }) => {
  return (
    <div>
      &nbsp;&nbsp;{Mearn.content}

    </div>
  )
}

const App = (dev) => {
  const [ persons, setPersons ] = useState(dev.persons)
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length + 1,
    }
  setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const namesToShow = persons
  
  
  return (
    <div>
      <h2>&nbsp;Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          &nbsp;name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          &nbsp;<button type="submit">add</button>
        </div>
      </form>
      <h2>&nbsp;&nbsp;Numbers</h2>
      {namesToShow.map(Mearn =>
          <Person key={Mearn.id} Mearn={Mearn} />
        )}
      

    </div>
  )
}

export default App