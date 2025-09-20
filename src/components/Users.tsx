
type user = {
    name: string;
    age: number;
    isStudent: boolean;
}

export default function Users(props:user) {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <p>{props.isStudent ? "Yes student" : "Not student" }</p>
    </div>
  )
}
