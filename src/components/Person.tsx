type personInfo = {
  onPerson: {
    id: number;
    name: string;
    roll: number;
    tecnologe: string[];
    isExpart: boolean;
  };
};

export default function Person({ onPerson }: personInfo) {
 
  return (
    <div>
      <p>id:{onPerson.id}</p>
      <h1>Name: {onPerson.name}</h1>
      <p>Roll: {onPerson.roll}</p>
      <div>
        {onPerson.tecnologe.map((tech, index) => {
          return (
            <div key={index}>
              <p>{tech}</p>
            </div>
          );
        })}
      </div>

      <p>{onPerson.isExpart ? "Yes expart" : "No expart"}</p>
    </div>
  );
}
