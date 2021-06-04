import React, { useState,useEffect } from 'react'
import SService from './services/persons'
import Personinfo from './components/Personinfo'
import Filter from './components/Filter'
import Personform from './components/Personform'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    
    SService.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
        console.log(response)
      })
  }, [])

const PDetails=(event)=>{
  event.preventDefault()
  if(persons.find(persons=>persons.content===newName)){
    if(window.confirm(`${newName} is already added to the phonebook,replace the old number with a new one?`)){
      const personfind = persons.find((sort) => sort.content.toLowerCase().includes(newName.toLowerCase()))
      const nameObject={
        ...personfind,
        number:newNumber,
      }
      SService.update(personfind.id,nameObject)
      .then(()=>{
      setPersons(persons.map(sort=>personfind.id!==sort.id?sort:nameObject))
      setNewName('')
      setNewNumber('')})

    }
  }
  else if(persons.find(persons=>persons.number===newNumber)){
    alert(newNumber+" is already added to the phonebook")
  }
  else{
  const nameObject={
    content:newName,
    number:newNumber,
  }
  SService.create(nameObject)
   .then(response=>{
  setPersons(persons.concat(response))
  setNewName('')
  setNewNumber('')
   })
}
}


const handleChange=(event)=>{

  setNewName(event.target.value)
}
const handleChangeNumber=(event)=>{

  setNewNumber(event.target.value)
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
    else{
      return null;
    }

  })

  const removeName = (id, name) => {
    if ( window.confirm(`Delete ${name} ?`)) {
      SService
        .deleteP(id)
        .then(() => setPersons(persons.filter((sort) => sort.id !== id)))
   
    } else {
      return;
    }
  };


  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter onChange={handleFilterChange}/>
      <Personform onSubmit={PDetails} valueName={newName} onChangeName={handleChange} valueNumber={newNumber} onChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
       {display.map(Mearn=>
        <Personinfo key={Mearn.id} Mearn={Mearn} removeName={removeName} />
        )}
    </div>
  )
}

export default App