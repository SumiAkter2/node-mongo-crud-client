import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import AddUser from "./AddUser";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";

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
  ]);
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
