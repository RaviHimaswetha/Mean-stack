import React, { useState,useEffect } from 'react'
import EService from './services/persons'
import Personinfo from './components/Personinfo'
import Filter from './components/Filter'
import Personform from './components/Personform'
import './App.css'

const Messages = ({message}) => {
  if(message === null){
      return null
  }
  
      return (
          <div className="class">
              {message}
          </div>
      )
  }

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null);

  useEffect(() => {
    console.log('effect')
    
    EService.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
        console.log(response)
      })
  }, [])

const EDetails=(event)=>{
  event.preventDefault()
  if(persons.find(persons=>persons.content===newName)){
    if(window.confirm(`${newName} is already added to the phonebook,replace the old number with a new one?`)){
      const personfind = persons.find((Mearn) => Mearn.content.toLowerCase().includes(newName.toLowerCase()))
      const nameObject={
        ...personfind,
        number:newNumber,
      }
      EService.update(personfind.id,nameObject)
      .then(()=>{
      setPersons(persons.map(Mearn=>personfind.id!==Mearn.id?Mearn:nameObject))
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
  EService.create(nameObject)
   .then(response=>{
  setPersons(persons.concat(response))
  setNewName('')
  setNewNumber('')
  setMessage(`Added ${newName} !`);
  setTimeout(() => setMessage(null), 5000);
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
      EService
        .deleteP(id)
        .then(() => setPersons(persons.filter((Mearn) => Mearn.id !== id)))
   
    } else {
      return;
    }
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <Messages message={message}/>
      <Filter onChange={handleFilterChange}/>
      <Personform onSubmit={EDetails} valueName={newName} onChangeName={handleChange} valueNumber={newNumber} onChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
       {display.map(Mearn=>
        <Personinfo key={Mearn.id} Mearn={Mearn} removeName={removeName} />
        )}
    </div>
  )
}

export default App