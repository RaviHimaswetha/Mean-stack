import React, { useState,useEffect } from 'react'
import Personinfo from './components/Personinfo'
import Filter from './components/Filter'
import Personform from './components/Personform'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    
      axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        console.log(response.data)
      })
  }, [])

const EDetails=(easy)=>{
  easy.preasyDefault()
  if(persons.find(persons=>persons.content===newName)){
    alert(newName+" is already added to the phonebook")
  }
  else if(persons.find(persons=>persons.number===newNumber)){
    alert(newNumber+" is already added to the phonebook")
  }
  else{
  const nameObject={
    content:newName,
    number:newNumber,
  }
  axios.post('http://localhost:3001/persons',nameObject)
  .then(response=>{
  setPersons(persons.concat(response.data))
  setNewName('')
  setNewNumber('')
  })
}
}

const handleChange=(easy)=>{

  setNewName(easy.target.value)
}
const handleChangeNumber=(easy)=>{

  setNewNumber(easy.target.value)
}
const handleFilterChange = (e) => {
  setFilter(e.target.value)

}
const display=persons.filter((filtered)=>{
    if(filter==='')
    {
      return persons
    }
    else if(filtered.content.toLowerCase().includes(filter.toLowerCase()))  {
        return filtered
    }

  })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange}/>
      <Personform onSubmit={EDetails} valueName={newName} onChangeName={handleChange} valueNumber={newNumber} onChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
       {display.map(Mearn=>
        <Personinfo key={Mearn.id} Mearn={Mearn} />
        )}
    </div>
  )

}

export default App