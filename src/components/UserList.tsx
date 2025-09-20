import React from "react";

type UserListProps = {
  onUserData: { id: number; name: string; age: number; isStudent: boolean }[];
};

export default function UserList({ onUserData }: UserListProps) {
  return (
    <div>
      <h1> User List </h1>
      <div>
        {onUserData.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                border: "2px solid gray",
                textAlign: "center",
                backgroundColor: "blue",
              }}
            >
              <p>{data.id}</p>
              <h1>{data.name}</h1>
              <p>{data.age}</p>
              <p>Student: {data.isStudent ? "yes student" : "No student"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
