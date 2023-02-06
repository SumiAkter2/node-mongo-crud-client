import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Home() {
  const users = useLoaderData();
  const [displayUser, setDisplayUser] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm(`Are you confirm to delete ${user.name} ?`);
    if (agree) {
      // console.log('deleting user with id: ', user._id)
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainUser = displayUser.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUser(remainUser);
          }
        });
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Node Mongo Crud Clients Site</h1>
        <h1> {displayUser.length}</h1>
        <div>
          {displayUser.map((user) => (
            <p key={user._id}>
              {user.name} ****{user.address}****{user.email} ***
              <Link to={`/update/${user._id}`}>
                <button>Update</button>
              </Link>
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
