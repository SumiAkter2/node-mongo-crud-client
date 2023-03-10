import { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("successfully added");
          e.target.reset();
        }
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  const inputBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h1>Add User</h1>

      <form onSubmit={handleSubmit}>
        <input onBlur={inputBlur} type="text" name="name" placeholder="Name" />
        <br />
        <input
          onBlur={inputBlur}
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          onBlur={inputBlur}
          type="text"
          name="address"
          placeholder="Address"
        />
        <br />
        <button>Added</button>
      </form>
    </div>
  );
};
export default AddUser;
