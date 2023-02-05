import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const vill = e.target.vill.value;
    const user = { name, vill };
    e.target.reset();

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...users, data];
        setUsers(newUser);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <div>
        <h1>Node Mongo Crud Clients Site</h1>
        <h1> {users.length}</h1>
        {users.map((user) => (
          <li key={users._id}>
            {user.name} ****{user.vill}****
          </li>
        ))}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <br />
          <input type="text" name="vill" placeholder="Village" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
