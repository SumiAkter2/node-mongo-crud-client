import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./AddUser";
import "./App.css";
import Home from "./Component/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user",
      element: <AddUser />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
