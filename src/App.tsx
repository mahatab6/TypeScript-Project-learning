
import './App.css'
import Button from './components/Button'
import Person from './components/Person'
import Users from './components/Users'

function App() {

  const handleClic = ():void => {
    alert("Button click")
  }

  const person = {
    id: 4564,
    name: "mahatab",
    roll: 845785,
    tecnologe: ["HTML", "CSS" ,"JAVASCRIPT", "REACT"],
    isExpart: true
  }

  return (
    <>
     <h1 className='heading'>React TypeScript</h1>

     <Users name="mahatab hosen" age= {20} isStudent = {true} language = {["Bangla", "Enaglish", "Arbic"]}/>

     <div>
      <Button  onClick={handleClic}/>
     </div>

     <Person onPerson = {person}/>
    </>
  )
}

export default App
