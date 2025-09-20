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
  console.log(onPerson);
  return (
    <div>
      <p>id:{onPerson.id}</p>
      <h1>Name: {onPerson.name}</h1>
      <p>Roll: {onPerson.roll}</p>
      <p>
        {onPerson.tecnologe.map((tech) => {
          return (
            <div>
              <p>{tech}</p>
            </div>
          );
        })}
      </p>

      <p>{onPerson.isExpart ? "Yes expart" : "No expart"}</p>
    </div>
  );
}
