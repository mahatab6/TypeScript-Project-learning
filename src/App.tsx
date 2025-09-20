
import './App.css'
import Button from './components/Button'
import Users from './components/Users'

function App() {

  const handleClic = ():void => {
    alert("Button click")
  }

  return (
    <>
     <h1 className='heading'>React TypeScript</h1>

     <Users name="mahatab hosen" age= {20} isStudent = {true} language = {["Bangla", "Enaglish", "Arbic"]}/>

     <div>
      <Button  onClick={handleClic}/>
     </div>
    </>
  )
}

export default App
