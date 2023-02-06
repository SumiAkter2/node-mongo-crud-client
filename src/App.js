import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import AddUser from "./AddUser";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Update from "./Component/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => fetch("http://localhost:5000/users"),
    },
    {
      path: "/users",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
    },
  ]);
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
