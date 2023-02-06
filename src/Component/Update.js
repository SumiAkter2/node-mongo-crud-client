import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Update() {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const inputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h4>{storedUser.name}</h4>
      <h5>Update user</h5>
      <form onSubmit={handleUpdate}>
        <input
          onBlur={inputChange}
          defaultValue={storedUser.name}
          type="text"
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          onBlur={inputChange}
          defaultValue={storedUser.email}
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          onBlur={inputChange}
          type="text"
          name="address"
          placeholder="Address"
          defaultValue={storedUser.address}
        />
        <br />
        <button>Added</button>
      </form>
    </div>
  );
}

export default Update;
