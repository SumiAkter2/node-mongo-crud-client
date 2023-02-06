import { useLoaderData } from "react-router-dom";

function Home() {
  const users = useLoaderData();

  const handleDelete = (user) => {
    const agree = window.confirm(`Are you confirm to delete ${user.name} ?`);
    if (agree) {
      console.log(user.name);
    }
  };
  return (
    <div className="App">
      <div>
        <h1>Node Mongo Crud Clients Site</h1>
        <h1> {users.length}</h1>
        <div>
          {users.map((user) => (
            <p key={users._id}>
              {user.name} ****{user.address}****{user.email} ***
              <button onClick={() => handleDelete(user)}>X</button>
            </p>
          ))}
        </div>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <br />
          <input type="text" name="vill" placeholder="Village" />
          <br />
          <button>Submit</button>
        </form> */}
      </div>
    </div>
  );
}

export default Home;
