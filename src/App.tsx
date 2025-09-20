import "./App.css";
import Button from "./components/Button";
import Person from "./components/Person";
import UserList from "./components/UserList";
import Users from "./components/Users";

function App() {
  const handleClic = (): void => {
    alert("Button click");
  };

  const person = {
    id: 4564,
    name: "mahatab",
    roll: 845785,
    tecnologe: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    isExpart: true,
  };

  const UserData = [
    { id: 1, name: "Mahatab", age: 20, isStudent: true },
    { id: 2, name: "Raju", age: 22, isStudent: false },
    { id: 3, name: "Nila", age: 19, isStudent: true },

  ]

  return (
    <>
      <h1 className="heading">React TypeScript</h1>

      <Users
        name="mahatab hosen"
        age={20}
        isStudent={true}
        language={["Bangla", "Enaglish", "Arbic"]}
      />

      <div>
        <Button onClick={handleClic} />
      </div>
      <UserList onUserData = {UserData}/>
      <Person onPerson={person} />
    </>
  );
}

export default App;
