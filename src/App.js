import { computeHeadingLevel } from "@testing-library/react";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const vill = e.target.vill.value;
    const user = { name, vill };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <div>
        <h1>Node Mongo Crud Clients Site</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <br />
          <input type="text" name="vill" placeholder="Village" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
