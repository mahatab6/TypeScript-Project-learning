
type user = {
    name: string;
    age: number;
    isStudent: boolean;
    language: string[];
}



export default function Users(props:user) {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <p>{props.isStudent ? "Yes student" : "Not student" }</p>
        <h2>Speaks:
    {
        props.language.map((lang, index) => {
        return (
            <div key={index}>
                <p>{lang}</p>
            </div>
        )}
    )
    }
        </h2>
    </div>
  )
}
